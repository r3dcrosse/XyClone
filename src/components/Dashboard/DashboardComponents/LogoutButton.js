import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';


class LogoutButton extends Component {

  handleLogout() {
    this.props.dispatchLogoutUser();
    browserHistory.push('/login');
  }
  handleEnterEditor() {
    browserHistory.push('/Editor');
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