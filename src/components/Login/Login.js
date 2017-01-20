import React, { Component } from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar'
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
      loginStatus: '',
      redirectOption: '',
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
    if (this.state.redirectOption === 'Back') {
      this.setState({
        signupDialog: false
      })
    } else {
      browserHistory.push('/dashboard')
    }
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
        console.log(response.data);
        let status;

        if (response.status === 200) {
          status = 'Great! You\'re now signed up for XyClone'
          let login = {
            id: usn,
            authResponse: {
              userID: usn
            }
          }
          that.setState({
            redirectOption: 'Dashboard',
          })
          sessionStorage.setItem('projectStates', JSON.stringify([]));
          sessionStorage.setItem('counter', JSON.stringify(0));
          that.props.dispatchLoginUser(login);
        } else if (response.status === 201) {
          console.log('SORRY THAT USERNAMEI S ALREADY TAKEN')
          status = 'Sorry. That username is already taken'

          that.setState({
            redirectOption: 'Back',
          })

        } else {
          status = 'Signup failed. Please try again'
        }


        that.setState({
          signupStatus: status,
          signupDialog: true
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
            id: usn,
            authResponse: {
              userID: usn
            }
          }

          that.props.dispatchLoginUser(login);
          sessionStorage.setItem('projectStates', JSON.stringify([]));
          sessionStorage.setItem('counter', JSON.stringify(0));
          console.log('SETTING SESSION STORAGE. WHY ISNT IT SETTING?');
          browserHistory.push('/dashboard');
          let allProjects = []
          let allComponents = [];
          if (Object.keys(response.data.projectsData).length !== 0) {
            response.data.projectsData.forEach(function(project) {
              console.log(project, 'THIS IS PROJECT FROM LOGIN SCREEN');
              allProjects.push({
                projectId: project.projectId,
                title: project.title,
                description: project.description,
                imgUrl: project.imgUrl
              })
              // GRAB ALL THE COMPONENT REFERENCES THE USER HAS
              for (let i = 0; i < project.components.length; i++) {
                allComponents.push(project.components[i])
              }

            // UPDATE STORAGE CACHE TO CORRESPOND TO THE COMPONENTS FROM THE USER
              for (let key in project.storage) {
                storage[key] = project.storage[key];
                if ((!storage[key].parent) && key !== ('body' + project.projectId)) {
                  storage[key].parent = {};
                }
              }

            });
            this.props.updateStorageComponents(allComponents);
            this.props.updateProjectsStorage(allProjects);
          }
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
        label={this.state.redirectOption}
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
        <AppBar
          title="XyClone "
          className='AppBar-EditorPage'
          showMenuIconButton={false}
        />
        <div className='loginpage-container'>
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
              title={this.state.signupStatus}
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
      </div>
    );
  }
}

export default Login;

        //MOUNT ALL THE COMPONENTS/PROJECTS BELONGING TO THIS USER
          // result.project = projects. map through projects.
        // userdata.data is all the projects.
        // module.exports = mongoose.model('Project', new Schema({
        //   projectId: Number,
        //   title: String,
        //   components: Array,
        //   storage: Object,
        //   userId: String
        // }));

