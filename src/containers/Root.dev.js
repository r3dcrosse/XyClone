import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Dashboard from '../components/dashboard';
import Login from '../components/login';
import EditorPage from '../components/editorPage'


export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} >
            <Route path='/' component={App} >
              <IndexRoute component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/editor' component={EditorPage} />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
