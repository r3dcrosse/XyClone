
import { combineReducers } from 'redux';
import xyclone from './EditingReducer';
import xycloneLogin from './LoginReducer';

const reducers = {
  xyclone: xyclone,
  xycloneLogin: xycloneLogin
};

// const rootReducer = combineReducers({
//   xyclone,
//   formReducer
// })
const rootReducer = combineReducers(reducers);
export default rootReducer;
