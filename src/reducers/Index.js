
import { combineReducers } from 'redux';
import xyclone from './EditingReducer';
import xycloneLogin from './LoginReducer';
import xycloneProjects from './ProjectsReducer';

const reducers = {
  xyclone: xyclone,
  xycloneLogin: xycloneLogin,
  xycloneProjects: xycloneProjects
};

// const rootReducer = combineReducers(reducers);
// export default rootReducer;

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_CACHE') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;


