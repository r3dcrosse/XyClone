import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import DevTools from './DevTools';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import axios from 'axios';
import DashboardContainer from '../Dashboard/DashboardContainer';
import Login from '../Login/Login';
import EditorPage from '../Editor/EditorPage';

export default class Root extends Component {

  requireAuth () {
    if (Object.keys(this.props.store.getState().xycloneLogin.loginStatus).length === 0) {
      browserHistory.push('/login');
    }
  }

  checkLogin () {
    if (Object.keys(this.props.store.getState().xycloneLogin.loginStatus).length !== 0) {
      browserHistory.push('/dashboard');
    }
  }

  checkCurrProjectId () {
    if (this.props.store.getState().xycloneProjects.currProjectId === null) {
      browserHistory.push('/dashboard');
    }
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} >
            <Route path='/' component={App}>
              <IndexRoute component={Login} />
              <Route path='/login' component={Login} onEnter={this.checkLogin.bind(this)}/>
              <Route path='/dashboard' component={DashboardContainer} onEnter={this.requireAuth.bind(this)} />
              <Route path='/editor' component={EditorPage} onEnter={this.checkCurrProjectId.bind(this)}/>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

// ON ENTER
