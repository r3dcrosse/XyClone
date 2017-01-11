import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { bindActionCreators } from 'redux';
// import EditorContainer from './EditorContainer'
import * as Actions from '../actions/EditingActions';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('../Basic.less');


// CHECK IF USER IS AUTHENTICATED. IF IS, THEN RENDER THIS.PROPS.CIHLDREN. ELSE...
export class App extends Component {
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

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" >
          <ul role='nav'>
          </ul>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps (state) {
  return {
    loginStatus: state.xycloneLogin.loginStatus
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatch)(App);
