import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import WebsitesBox from './DashboardComponents/WebsitesBox.js';
import { Link } from 'react-router';
import LogoutButtonContainer from './DashboardComponents/LogoutButtonContainer'
require("../../Basic.less");


class Dashboard extends Component {

  render() {
    return (
      <div className="App">
        <AppBar
          title="XyClone | Dashboard"
          className='AppBar-EditorPage'
          iconElementRight={ <FlatButton label='Log Out' /> }
          onRightIconButtonTouchTap={ this.logout.bind(this) }
        />
        <LogoutButtonContainer />
        <div className="websitesBox-container">
          <WebsitesBox />
          <span>
            <RaisedButton label="+" />
          </span>
        </div>
      </div>
    );
  }
}

export default Dashboard;
