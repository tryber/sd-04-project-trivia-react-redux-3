import { combineReducers } from 'redux';
import token from './token';
import login from './login';
import trivia from './trivia';
import settings from './settings';
import categories from './categories';

const rootReducer = combineReducers({
  login,
  token,
  trivia,
  settings,
  categories,
});

export default rootReducer;
