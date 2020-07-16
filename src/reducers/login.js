import { LOG_INTO } from '../actions/login';

const INITIAL_STATE = {
  isLogged: false,
  urlGravatar: 'https://www.gravatar.com/avatar/',
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
},
};

const login = (state = INITIAL_STATE, action) => {
  console.log('meu state movieReducer : ', state);
  switch (action.type) {
    case LOG_INTO:
      return {
        ...state,
        isLogged: true,
        urlGravatar: action.urlGravatar,
        player: {
          name: action.name,
          assertions: 0,
          score: 0,
          gravatarEmail: action.emailGravatar,
      },
      };
    default:
      return state;
  }
};

export default login;
