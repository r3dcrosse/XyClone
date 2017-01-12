import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import DevTools from './DevTools';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import DashboardContainer from '../Dashboard/DashboardContainer';
import Login from '../Login/Login';
import EditorPage from '../Editor/EditorPage'

export default class Root extends Component {
 // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loginStatus: this.props.loginStatus
  //   }
  // }

  // componentDidMount () {
  //   if (Object.keys(this.state.loginStatus).length === 0) {
  //     // browserHistory.push('/login');
  //   }
  // }

  // componentWillReceiveProps (newProps) {
  //   console.log(newProps)
  //   this.setState({
  //     loginStatus: newProps.loginStatus
  //   });

  //   if (Object.keys(newProps.loginStatus).length === 0) {
  //     // browserHistory.push('/login');
  //   }
  // }
  requireAuth() {
    console.log('REQUIREING AUTH');
    if (Object.keys(this.props.store.getState().xycloneLogin.loginStatus).length === 0) {
      browserHistory.push('/login');
    }
  }

  checkLogin() {
    if (Object.keys(this.props.store.getState().xycloneLogin.loginStatus).length !== 0) {
      console.log('CHECKING LOGIN COMPLETE YOU ARE LOGGED IN');
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
              <Route path='/editor' component={EditorPage} onEnter={this.requireAuth.bind(this)}/>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

// ON ENTER
