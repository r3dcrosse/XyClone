import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Dashboard from './components/dashboard';
import Editor from './components/Editor';
import Login from './components/login';

import { Provider } from 'react-redux'
import './actions/incrementAction';
import { component } from './reducers/editingReducer';
import { createStore } from 'redux';

let store = createStore(component);
window.store = store;

// ReactDOM.render(
//   <Provider store={store} >
//     <Router history={browserHistory} >
//         <Route path='/' component={App} >
//           <IndexRoute component={Login} />
//           <Route path='/login' component={Login} />
//           <Route path='/dashboard' component={Dashboard} />
//           <Route path='/editor' component={Editor} />
//         </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
