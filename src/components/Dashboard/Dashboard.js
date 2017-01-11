import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import WebsitesBox from './DashboardComponents/WebsitesBox.js';
import { Link } from 'react-router';
import LogoutButtonContainer from './DashboardComponents/LogoutButtonContainer'
require("../../Basic.less");


class Dashboard extends Component {


  logout() {
    browserHistory.push('/login');
  }

  addNewProject() {
    console.log('THIS IS SUPPOSED TO ADD A NEW PROJECT');
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="XyClone | Dashboard"
          className='AppBar-EditorPage'
          iconElementRight={ <LogoutButtonContainer /> }
        />

        <div className="websitesBox-container">
          <WebsitesBox />
          <span>
            <RaisedButton
              label="+"
              onClick={ this.addNewProject.bind(this) }
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Dashboard;
