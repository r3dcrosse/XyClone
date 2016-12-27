import React, { Component } from 'react';
import { Link } from 'react-router';
require("./basic.less");

class App extends Component {
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
        {this.props.children}
      </div>
    );
  }
}

export default App;
