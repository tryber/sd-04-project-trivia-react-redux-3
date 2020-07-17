import { LOG_INTO } from '../actions/login';

const INITIAL_STATE = {
  isLogged: false,
  name: '',
  emailGravatar: '',
  assertions: 0,
  score: 0,
  urlGravatar: 'https://www.gravatar.com/avatar/',
};

const login = (state = INITIAL_STATE, action) => {
  console.log('meu state movieReducer : ', state);
  switch (action.type) {
    case LOG_INTO:
      return {
        ...state,
        isLogged: true,
        name: action.name,
        emailGravatar: action.emailGravatar,
        urlGravatar: action.urlGravatar,
      };
    default:
      return state;
  }
};

export default login;
