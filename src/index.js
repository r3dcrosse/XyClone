import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Dashboard from './components/dashboard';
import Editor from './components/editor';
import Login from './components/login';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/editor' component={Editor} />
    </Route>
  </Router>,
  document.getElementById('root')
);
console.log('this is rendering doe');
