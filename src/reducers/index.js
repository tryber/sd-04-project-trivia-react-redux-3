import { combineReducers } from 'redux';
import token from './token';
import login from './login';
import trivia from './trivia';

const rootReducer = combineReducers({
  login,
  token,
  trivia,
});

export default rootReducer;
