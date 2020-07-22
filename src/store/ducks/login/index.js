import { LOG_INTO, UPDATE_PLAYER } from './actions';

const INITIAL_STATE = {
  isLogged: false,
  email: '',
  name: '',
  assertions: 0,
  score: 0,
  picture: 'https://www.gravatar.com/avatar/',
};

const login = (state = INITIAL_STATE, action) => {
  console.log('meu state movieReducer : ', state);
  switch (action.type) {
    case LOG_INTO:
      return {
        ...state,
        isLogged: true,
        email: action.emailGravatar,
        name: action.name,
        assertions: 0,
        score: 0,
        picture: action.urlGravatar,
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        assertions: state.assertions + 1,
        score: state.score + action.score,
      };
    default:
      return state;
  }
};

export default login;
