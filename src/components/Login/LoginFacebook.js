import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { storage } from '../../cache/ComponentCache'

class FacebookLogin extends Component {
  componentDidMount() {
    if (Object.keys(this.props.loginStatus).length !== 0) {
      browserHistory.push('/dashboard');
    }
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '233882087066195',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      });
    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  changeLoginState (response) {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(meInfo) {

      console.log('Successful login for: ' + meInfo.name);
      let assembledMe = Object.assign({}, meInfo, response);
      this.props.dispatchLoginUser(assembledMe);
      // REQUEST ENDPOINT FOR SAVING USERS
      // 'http://localhost:8000/saveUser'
      // ALSO SET SESSION FROM HERE IN FUTURE
      this.requestForStorage(response);

    }.bind(this));
  }

  requestForStorage (response) {
    console.log('RUNNING REQUEST FOR STORAGE');
     axios.post('/saveUser', {userId: response.authResponse.userID})
    .then((userData) => {
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
        console.log('ABOUT TO PUSH TO DASHBOARD');
        browserHistory.push('/Dashboard');
        console.log('PUSHED TO DASHBOARD')
        let allProjects = []
        let allComponents = [];
        if (Object.keys(userData.data).length === 0) {
          return;
        } else {
          userData.data.forEach(function(project) {
            allProjects.push({
              projectId: project.projectId,
              title: project.title,
              description: project.description
            })
            for (let i = 0; i < project.components.length; i++) {
              allComponents.push(project.components[key])
            }
            for (let key in project.storage) {
              storage[key] = project.storage[key];
            }
          });
          // weed out ALL component references
          // weed out ALL storage elements
          // weed out projects.
          // call this.props.updateStorageComponents(storage, components)
          this.props.updateStorageComponents(allComponents);
          this.props.updateProjectsStorage(allProjects);
          // call this.props.(make youro wn dispatch) for new projects)
        }

    });
  }

  // This is called with the results from from FB.getLoginStatus().
  statusChangeCallback (response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      this.changeLoginState(response);
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      // FB.login(this.checkLoginState());
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      console.log('WHAT THE **** HAPPENENED')
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  checkLoginState () {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }

  handleClick () {
    FB.login(this.checkLoginState());
  }

  render () {
    return (
      <RaisedButton primary={true} label='Facebook Login' onClick={this.handleClick.bind(this)}/>
    )
  }
}

export default FacebookLogin;
