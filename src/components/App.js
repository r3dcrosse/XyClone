import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { bindActionCreators } from 'redux';
// import EditorContainer from './EditorContainer'
import * as Actions from '../actions/EditingActions';
import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
require('../Basic.less');

export class App extends Component {
  render() {
    const { components, actions } = this.props;
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

function mapState(state) {
  return {
    components: state.components
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
