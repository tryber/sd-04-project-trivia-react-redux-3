import { combineReducers } from 'redux';
import token from './token';
import login from './login';

const rootReducer = combineReducers({
  login,
  token,
});

export default rootReducer;
