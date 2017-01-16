import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { storage } from '../../../cache/ComponentCache';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

class BuildSite extends Component {
constructor(props) {
    super(props)
    this.state = {
      components: [],
      storage: {},
      link: '',
      readyToDownload: false
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
    this.setState({
      components: newProps.components,
      storage: storage,
      readyToDownload: false
    })
  }

  onBuildSite() {
    console.log('===============================================================================')
    console.log(this.state.storage);
    let projectComponents = this.state.components.filter((component) => {return component.projectId === this.props.currProjectId});
    let projectStorage = {};
    for (let key in this.state.storage) {
      // First transfer correct body component into storage for specific projectId
      if (key === 'body' + this.props.currProjectId) {
        projectStorage[key] = this.state.storage[key]
      } else {
        // Check if object in storage has a projectId (a body component doesn't!)
        if (this.state.storage[key].project) {
          // Adds components of that projectId from storage into correct project
          this.state.storage[key].project.projectId === this.props.currProjectId ?
            projectStorage[key] = this.state.storage[key] : null ;
        }
      }
    }

    let siteData = {
      components: projectComponents,
      storage: projectStorage,
      projectId: this.props.currProjectId
    };

    // console.log(siteData);
    // console.log('BUILDING SITE WITH INSIDE STATE DATA');
    let context = this;
    axios.post('saveSite', siteData)
    .then(function(response) {
      console.log('LINK TO DOWNLOAD SITE', response.data);
      context.setState({
        link: response.data,
        readyToDownload: true
      });
      return response;
    });
    // .then(function(res) {
    //   console.log(res.data, 'DATA')
    //   axios.delete(res.data)
    // })
  }

  render () {
    return (
      <div>
        <MenuItem
          rightIcon={ <ArrowDropRight /> }
          menuItems={[
            <MenuItem onTouchTap={this.onBuildSite}> Save Site </MenuItem>,
            <MenuItem href={this.state.link} disabled={!this.state.readyToDownload}> Download Site </MenuItem>
        ]}>
           Manage Sites
        </MenuItem>
      </div>
    )
  }
}

export default BuildSite;
