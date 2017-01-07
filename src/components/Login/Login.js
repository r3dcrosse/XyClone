import React, { Component } from 'react';
import { Link } from 'react-router';

require("../../Basic.less");

class Login extends Component {
  render() {
    return (
      <div className="App">
        <input placeholder='Username' />
        <input placeholder='Password' />
        <button>
          <Link to='/dashboard'> Login </Link>
        </button>
      </div>
    );
  }
}

export default Login;
