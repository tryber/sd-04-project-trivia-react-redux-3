import { LOG_INTO, UPDATE_SCORE } from '../actions/login';

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
  console.log('meu state movieReducer : ', state, action);
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
    case UPDATE_SCORE:
      return {
        ...state,
        player: { ...state.player,
          score: state.player.score + action.score,
        },
      };
    default:
      return state;
  }
};

export default login;
