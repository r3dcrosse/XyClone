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
      link: ''
    }
    this.onBuildSite = this.onBuildSite.bind(this)
  }
  componentDidMount() {
    console.log(this.props, 'THIS.PROPS FOR BUILDISTE.JS');
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
      storage: this.state.storage,
      userId: this.props.currUserId,
      projectId: this.props.currProjectId,
      title: 'yoloswag for now'
    };
    console.log(siteData);
    console.log('BUILDING SITE WITH INSIDE STATE DATA');
    axios.post('saveSite', siteData)
    .then(function(response) {
      console.log(response)
      context.setState({
        link: response.data
      })
      return response
    })
    // .then(function(res) {
    //   console.log(res.data, 'DATA')
    //   axios.delete(res.data)
    // })
  }

  render () {
    return (
      <div>
        <MenuItem rightIcon={<ArrowDropRight />} menuItems=
                {[
                  <MenuItem onTouchTap={this.onBuildSite}> Save Site </MenuItem>,
                  <MenuItem href={this.state.link}> Download Site </MenuItem>
                ]}>
           Manage Sites
        </MenuItem>
      </div>
    )
  }
}

export default BuildSite;
