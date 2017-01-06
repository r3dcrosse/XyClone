import React, { Component } from 'react';
import { Link } from 'react-router';
require("../basic.less");


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div> yeah im dashboard </div>

        <button> <Link to='/login'> Logout </Link> </button>
        <button> <Link to='/Editor'> Editor </Link> </button>

      </div>
    );
  }
}

export default Dashboard;

