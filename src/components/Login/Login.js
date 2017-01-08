import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

require("../../Basic.less");

class Login extends Component {
  render() {
    return (
      <div className="App">
        <input placeholder='Username' />
        <input placeholder='Password' />
        <RaisedButton label="Login" primary="true" href="/dashboard">
          {/* <Link to='/dashboard' /> */} {/* Maybe still need??? */}
        </RaisedButton>
      </div>
    );
  }
}

export default Login;
