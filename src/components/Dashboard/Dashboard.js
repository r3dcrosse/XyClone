import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import WebsitesBox from './DashboardComponents/WebsitesBox.js';
require("../../Basic.less");


class Dashboard extends Component {

  logout() {
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="XyClone | Dashboard"
          className='AppBar-EditorPage'
          iconElementRight={ <FlatButton label='Log Out' /> }
          onRightIconButtonTouchTap={ this.logout.bind(this) }
        />
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
