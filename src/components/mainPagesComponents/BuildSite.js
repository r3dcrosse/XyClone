import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { storage } from '../../cache/ComponentCache'

class BuildSite extends Component {
constructor(props) {
    super(props)
    this.state = {
      components: [],
      storage: {},
      link: ''
    }
    this.onBuildSite = this.onBuildSite.bind(this)
  }
  componentDidMount() {
    this.setState({
      components: this.props.components,
      storage: storage
    })
  }
  componentWillReceiveProps(newProps) {
    console.log('BUILDSITE RECEIVED NEW PROPS', newProps);
    this.setState({
      components: newProps.components,
      storage: storage
    })
  }

  onBuildSite() {
    var context = this;
    var siteData = {
      components: this.state.components,
      storage: this.state.storage
    };
    console.log(siteData);
    console.log('BUILDING SITE WITH INSIDE STATE DATA');
    axios.post('buildSite', siteData)
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

  render () {
    return (
      <div>
        <button onClick={this.onBuildSite}> SAVE SITE </button>
        <button><a href={this.state.link}> DOWNLOAD SITE </a></button>
      </div>
    )
  }
}

export default BuildSite;
