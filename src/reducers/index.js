import { combineReducers } from 'redux';
import token from './token';
import login from './login';
import ButtonAnswer from './ButtonAnswer';

const rootReducer = combineReducers({
  login,
  token,
  ButtonAnswer,
});

export default rootReducer;
