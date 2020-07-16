import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logInto } from "../actions/login";

const FormLogin = () => {
  const [user, setUser] = useState({
    name: "",
    emailGravatar: "",
  });
  const dispatch = useDispatch();

  const renderLabelInput = (textLabel, type, id, name, dataTestid) => {
    return (
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
  };

  return (
    <>
      <form>
        {renderLabelInput(
          "insira o email",
          "email",
          "email",
          "emailGravatar",
          "input-gravatar-email"
        )}
        {renderLabelInput(
          "insira o nome",
          "text",
          "name",
          "name",
          "input-player-name"
        )}
        <input
          value="jogar"
          id="jogar"
          type="button"
          dataTestid="btn-play"
          onClick={() => dispatch(logInto(user))}
        />
      </form>
    </>
  );
};

export default FormLogin;
