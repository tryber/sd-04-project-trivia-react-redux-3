import { combineReducers } from 'redux';
import reducerTest from './reducerTest';
import login from './login';

const rootReducer = combineReducers({
  login,
  reducerTest,
});

export default rootReducer;
