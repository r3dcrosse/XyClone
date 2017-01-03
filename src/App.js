import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';


require("./basic.less");

// const Router = require('react-router').Router
// const Route = require('react-router').Route
// const Link = require('react-router').Link
//  const Root = ({ store }) => (
//    <Provider store={store}>
//    </Provider>
//  );

  // addTodo () {
  //   console.log(this.props.dispatch);
  //   var todo = 'forrest says hi';
  //   this.props.dispatch(addTodo(todo));
  //   console.log(this.props.todos);
  // }

class App extends Component {
  render() {
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

export default App;