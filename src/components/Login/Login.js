import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

require("../../Basic.less");

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="loginpage-field-container">
          <div className="loginpage-username-field">
            <TextField
              hintText="What is your username?"
              floatingLabelText="Username"
            />
          </div>
          <div className="loginpage-password-field">
            <TextField
              hintText="Please enter your password"
              floatingLabelText="Password"
              type="password"
            />
          </div>
          <div className="loginpage-login-button">
            <RaisedButton
              label="Login"
              primary="true"
              href="/dashboard">
              {/* <Link to='/dashboard' /> */} {/* Maybe still need??? */}
            </RaisedButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
