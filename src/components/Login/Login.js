import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FacebookLoginContainer from './LoginFacebookContainer.js'
require("../../Basic.less");


class Login extends Component {

  render() {
    return (
      <div className="App">
        <div className="loginpage-field-container">
          <FacebookLoginContainer />
          <TextField
            hintText="What is your username?"
            floatingLabelText="Username"
          />
          <TextField
            hintText="Please enter your password"
            floatingLabelText="Password"
            type="password"
          />
          <span>
            <RaisedButton
              label="Sign Up"
              secondary={true}
            />
            <RaisedButton
              label="Login"
              primary={true}
              href="/dashboard"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Login;


