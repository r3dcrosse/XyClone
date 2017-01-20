import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { storage } from '../../../cache/ComponentCache'
// import FB from '../../../cache/CacheFB'
import RaisedButton from 'material-ui/RaisedButton';


class LogoutButton extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '233882087066195',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
      })
      FB.getLoginStatus(function(response) {
        console.log(response, 'THIS IS MY LOGIN STATUS');
      }.bind(this));
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

  handleLogout() {
    console.log('FOR SOME REASON LOGOUT BUTTON IS CLICKED ??')
    console.log('the login status is', this.props.loginStatus);
    for (let key in storage) {
      delete storage[key];
    }
    sessionStorage.clear();

    // if length is two, this is a local login
    if (Object.keys(this.props.loginStatus).length === 2) {
      console.log('LOGGING OUT HERE')
      this.props.dispatchLogoutUser();
      this.props.clearCache();
      browserHistory.push('/login');

    } else {
      FB.logout(function(response) {
        console.log('response of logout', response);
        this.props.dispatchLogoutUser();
        this.props.clearCache();
       browserHistory.push('/login');

      }.bind(this));
    }

  }


  render() {
    return (
      <div>
        <RaisedButton
          label="Log Out"
          secondary={true}
          onClick={this.handleLogout.bind(this)}
        />
      </div>
    )
  }
}


export default LogoutButton;