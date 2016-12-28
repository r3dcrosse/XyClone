import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

require("./basic.less");

// const Router = require('react-router').Router
// const Route = require('react-router').Route
// const Link = require('react-router').Link
//  const Root = ({ store }) => (
//    <Provider store={store}>
//    </Provider>
//  );

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>XyCLONE</h2>
          <button>SIGN IN <Link to={`/setup`}></Link>
          </button>
        </div>
        <p className="App-intro">
          TRY ME! : make a change somewhere and save your text editor. Webpack should hot reload your page
        </p>
        <ul role='nav'>
          <li> <Link to='/login'> login </Link> </li>
          <li> <Link to='/editor'> editor </Link> </li>
          <li> <Link to='/dashboard'> dashboard </Link> </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
