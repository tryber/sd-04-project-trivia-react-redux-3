import { combineReducers } from 'redux';
import token from './token';
import login from './login';
import trivia from './trivia';
import ButtonAnswer from './ButtonAnswer';
import StoreConfiguration from '../reducers/StoreConfiguration'

const rootReducer = combineReducers({
  login,
  token,
  trivia,
  ButtonAnswer,
  StoreConfiguration,
});

export default rootReducer;
