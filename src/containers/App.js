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
          <li> <Link to='/login'> login </Link> </li>
          <li> <Link to='/editor'> editor </Link> </li>
          <li> <Link to='/dashboard'> dashboard </Link> </li>
        </ul>
        {this.props.children}
        <p className="App-intro">
          TRY ME! : make a change somewhere and save your text editor. Webpack should hot reload your page
        </p>
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