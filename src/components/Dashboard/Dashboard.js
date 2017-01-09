import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
require("../../Basic.less");


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <RaisedButton
          label="Log Out"
          secondary="true"
          href="/login"
        />
        <div className="dashboard-container">
          <h1>My Cool Website</h1>
          <RaisedButton
            label="Open Editor"
            primary="true"
            href="/Editor"
          />
        </div>

      </div>
    );
  }
}

export default Dashboard;
