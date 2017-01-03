import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';
import { bindActionCreators } from 'redux';
// import EditorContainer from './EditorContainer'
import * as Actions from '../actions/editingActions';

require('../basic.less');

class App extends Component {
  render() {
    const { components, actions } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>XyCLONE</h2>
        </div>
        <ul role='nav'>
        </ul>
        {this.props.children}

      </div>
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