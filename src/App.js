import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addTodo } from './actions/incrementAction';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

require("./basic.less");

class App extends Component {
  constructor() {
    super();
  }

  addTodo () {
    console.log(this.props.dispatch);
    var todo = 'yolo swag this up';
    this.props.dispatch(addTodo(todo));
    console.log(this.props.todos);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>XyCLONE</h2>
          <span onClick={this.addTodo.bind(this)}> click me to change state
            {this.props.todos.map(todo =>
              <span> {todo.text} </span>
            )}
          </span>
        </div>
        <p className="App-intro">
          TRY ME: make a change somewhere and save. Webpack should hot reload your page
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

App = connect(mapStateToProps, null)(App);

export default DragDropContext(HTML5Backend)(App);
