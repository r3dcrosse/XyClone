import React, { Component } from 'react';

require("../basic.less");
import axios from 'axios';
import {Link} from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      link: '',
    }

    this.onBuildSite = this.onBuildSite.bind(this)
  }

  onBuildSite() {
    var context = this;
    var dummyData = {
      stateTree: { //dummy data since state tree hasn't been created yet
      componentReference: [{componentId: 0, type: "Navbar"}, {componentId: 1, type: "Textbox"}],
      },
      components: {
        0: {
          name: 'asdfas',
          css: {
            backgroundColor: 'Blue',
            width: '500px',
            height: '100px',
            margin: '10px'
          },
          links: [],
          type: 'Navbar'
        },
        1: {
          name: 'textboxasdfasef',
          css: {
            backgroundColor: 'yellow',
            width: '100px',
            height: '100px',
            margin: '10px'
          },
          text: 'text inside textbox'
        }
      }
    }

    axios.post('buildSite', dummyData)
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
