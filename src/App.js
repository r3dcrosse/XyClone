import React, { Component } from 'react';

import { connect } from 'react-redux';

import  addTodo from './actions/incrementAction';
import { Router, Route, Link } from 'react-router';
import EditorContainer from './containers/EditorContainer'

import { addTodo } from './actions/incrementAction';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

require("./basic.less");

// const Router = require('react-router').Router
// const Route = require('react-router').Route
// const Link = require('react-router').Link
//  const Root = ({ store }) => (
//    <Provider store={store}>
//    </Provider>
//  );

export default class App extends Component {
  constructor() {
    super();
  }

  // addTodo () {
  //   console.log(this.props.dispatch);
  //   var todo = 'forrest says hi';
  //   this.props.dispatch(addTodo(todo));
  //   console.log(this.props.todos);
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>XyCLONE</h2>
        </div>
        <p className="App-intro">
          TRY ME! : make a change somewhere and save your text editor. Webpack should hot reload your page
        </p>
        <ul role='nav'>
          <li> <Link to='/login'> login </Link> </li>
          <li> <Link to='/editor'> editor </Link> </li>
          <li> <Link to='/dashboard'> dashboard </Link> </li>
        </ul>
        <EditorContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   }
// }
// const mapStateToProps = (state) => {
//     return {
//         components: state.components
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onComponentClick: (id) => {
//             dispatch(editingActions.removeComponent(id))
//         }
//     }
// }

// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

//export default EditorContainer
//App = connect(mapStateToProps, null)(App);

// export default App;

////////////////////////////////////////////////////
// const mapStateToProps = (state) => {
//     return {
//         components: state.components
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onComponentClick: (id) => {
//             dispatch(editingActions.removeComponent(id))
//         }
//     }
// }

// const EditorContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Editor)

// export default EditorContainer
export default DragDropContext(HTML5Backend)(App);
