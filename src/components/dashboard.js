import React, { Component } from 'react';
require("../basic.less");
import axios from 'axios';
import {Link} from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      link: ''
    }

    this.onBuildSite = this.onBuildSite.bind(this)
  }

  onBuildSite() {
    var context = this;

    axios.get('buildSite')
    .then(function(response) {
      context.setState({
        link: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div> yeah im dashboard </div>
        <button onClick={this.onBuildSite}> SAVE SITE </button>
        <button><a href={this.state.link}> DOWNLOAD SITE </a></button>
      </div>
    );
  }
}

export default Dashboard;
