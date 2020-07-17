import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInto } from '../actions/login';
import fetchToken from '../actions/token';

const renderLabelInput = (textLabel, type, id, name, dataTestid, user, setUser) => (
  <label htmlFor={id}>
    {textLabel}
    <input
      id={id}
      name={name}
      type={type}
      value={user[name]}
      data-testid={dataTestid}
      onChange={(event) =>
        setUser({ ...user, [event.target.name]: event.target.value })
      }
    />
  </label>
);

const fetchQuestions = async (dispatch) => {
  await dispatch(fetchToken()).then(({ token }) =>
    localStorage.setItem('token', JSON.stringify([token])));
};

const renderButtonSettings = () => (
  <Link to="Configuration" data-testid="btn-settings">
    <input
      value="configurações"
      id="config"
      type="button"
    />
  </Link>
);

const FormLogin = () => {
  const [user, setUser] = useState({
    name: '',
    emailGravatar: '',
  });
  const dispatch = useDispatch();

  const validateIputs = () => (Object.values(user).some(((value) => !value)));

  return (
    <div>
      <form>
        {renderLabelInput('insira o email', 'email', 'email', 'emailGravatar', 'input-gravatar-email', user, setUser)}
        {renderLabelInput('insira o nome', 'text', 'name', 'name', 'input-player-name', user, setUser)}
        <input
          value="jogar"
          id="jogar"
          type="button"
          data-testid="btn-play"
          disabled={validateIputs()}
          onClick={() => {
            dispatch(logInto(user));
            fetchQuestions(dispatch);
          }}
        />
        {renderButtonSettings()}
      </form>
    </div>
  );
};

export default FormLogin;
