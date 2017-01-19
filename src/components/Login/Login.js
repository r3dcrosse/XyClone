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
      signupDialog: false, 
      loginDialog: false,
      signupStatus: '',
      loginStatus: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginRedirect = this.handleLoginRedirect.bind(this);
    this.handleLoginBackout = this.handleLoginBackout.bind(this);
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

  handleLoginBackout(event) {
    this.setState({
      loginDialog: false
    })
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
          signupDialog: true,
          signupStatus: status
        })

      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleLoginSubmit(event) {
    var usn = this.state.username,
        pass = this.state.password,
        that = this;

    console.log('props', this.props)

    axios.post('http://localhost:8000/login', {
        usn: usn,
        pass: pass
    })
      .then(function (response) {
        
        let status

        console.log(response)

        if (response.data.response === 'valid login') {
          status = 'Great! You\'re now up for XyClone'
          let login = {
            id: response.data.token,
            authResponse: {
              userID: response.data.token
            }
          }
          that.props.dispatchLoginUser(login);
          browserHistory.push('/dashboard');
        } else if (response.data === 'user not found') {
          console.log('in the 400 block')
          status = 'Username not found'
        } else if (response.data === 'password incorrect') {
          console.log('in the 500 block')
          status = 'password incorrect'
        } else {
          status = 'Sorry, we had an error. Please try again later'
        }

        that.setState({
          loginDialog: true,
          loginStatus: status
        })
        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    const signupActions = [
      <RaisedButton 
        label="Go to the dashboard" 
        onClick={this.handleLoginRedirect} 
      />
    ]
    const loginActions = [
      <RaisedButton
        label="Back"
        onClick={this.handleLoginBackout}
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
            open={this.state.signupDialog}
            actions={signupActions}
          />
          <Dialog
            title={this.state.loginStatus}
            open={this.state.loginDialog}
            actions={loginActions}
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
              onClick={this.handleLoginSubmit}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Login;


