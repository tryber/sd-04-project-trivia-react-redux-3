import { combineReducers } from 'redux';
import token from './token';
import login from './login';
import trivia from './trivia';
import ButtonAnswer from './ButtonAnswer';

const rootReducer = combineReducers({
  login,
  token,
  trivia,
  ButtonAnswer,
});

export default rootReducer;
