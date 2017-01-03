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

    axios.post('buildSite')
    .then(function(response) {
      console.log(response)
      context.setState({
        link: response.data
      })
      return response
    })
    .then(function(res) {
      console.log(res.data, 'DATA')
      axios.delete(res.data)
    })
  }

  render() {
    return (
      <div className="App">
        <div> yeah im dashboard </div>
        <button onClick={this.onBuildSite}> SAVE SITE </button>
        <button><a href={this.state.link}> DOWNLOAD SITE </a></button>
        <button> <Link to='/login'> Logout </Link> </button>
        <button> <Link to='/Editor'> Editor </Link> </button>

      </div>
    );
  }
}

export default Dashboard;
