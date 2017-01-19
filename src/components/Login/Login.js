import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FacebookLoginContainer from './LoginFacebookContainer.js'
import SignedUpDialog from './SignedUpDialog'
import ReactPasswordStrength from 'react-password-strength'
import { browserHistory } from 'react-router';
import axios from 'axios'
require("../../Basic.less");

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      open: false, 
      signUpStatus: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleSigninSubmit = this.handleSigninSubmit.bind(this);
    this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleLoginRedirect(event) {
    browserHistory.push('/dashboard')
  }

  handleSignupSubmit(event) {
    var usn = this.state.username,
        pass = this.state.password,
        that = this;

    console.log('props', this.props)

    axios.post('http://localhost:8000/signup', {
        usn: usn,
        pass: pass
    })
      .then(function (response) {
        
        let status

        if (response.status === 200) {
          status = 'Great! You\'re now signed up for XyClone'
          let login = {
            id: response.data,
            authResponse: {
              userID: response.data
            }
          }
          that.props.dispatchLoginUser(login);
        } else if (response.status === 400) {
          status = 'Sorry. That username is already taken'
        } else {
          status = 'Signup failed. Please try again'
        }

        that.setState({
          open: true,
          signUpStatus: status
        })
        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleSigninSubmit(event) {
  }

  render() {
    const actions = [
      <RaisedButton 
        label="Go to the dashboard" 
        onClick={this.handleLoginRedirect} 
      />
    ]
    return (
      <div className="App">
        <div className="loginpage-field-container">
          <FacebookLoginContainer />
          <TextField
            floatingLabelText="Username"
            value={this.state.value}
            onChange={this.handleUsernameChange}
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            value={this.state.value}
            onChange={this.handlePasswordChange}
          />
          <Dialog
            title={this.state.signUpStatus}
            open={this.state.open}
            actions={actions}
          />
          {/* <ReactPasswordStrength
            minLength={5}
            minScore={2}
            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
            changeCallback={this.handlePasswordChange}
            inputProps={{ name: "password", autocomplete: "off" }}
          /> */}
          <span>
            <RaisedButton
              label="Sign Up"
              secondary={true}
              onClick={this.handleSignupSubmit}
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


