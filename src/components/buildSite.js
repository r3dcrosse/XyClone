import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import { storage } from '../cache/ComponentCache'

class BuildSite extends Component {
constructor(props) {
    super(props)
    this.state = {
      componentReferences: [],
      components: {},
      link: ''
    }
    this.onBuildSite = this.onBuildSite.bind(this)
  }
  componentDidMount() {
    this.setState({
      componentReferences: this.props.components,
      components: storage
    })
  }
  componentWillReceiveProps(newProps) {
    console.log('BUILDSITE RECEIVED NEW PROPS', newProps);
    this.setState({
      componentReferences: newProps.components,
      components: storage
    })
  }

  onBuildSite() {
    var context = this;
    var siteData = {
      componentReferences: this.state.componentReferences,
      components: this.state.components
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
