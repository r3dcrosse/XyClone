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
          href="/login"
        />
        <div className="dashboard-container">
          <table className="websites-table">
            <tr>
              <td><h1>My First Cool Website</h1></td>
            </tr>
            <tr>
              <td>
              <RaisedButton
              label="Open Editor"
              href="/Editor"
              />
              </td>
            </tr>
          </table>
        </div>

      </div>
    );
  }
}

export default Dashboard;
