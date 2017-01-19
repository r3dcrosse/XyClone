import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class PageSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: ''
    }
  }
  componentDidMount () {
    this.setState({
      currPage: this.props.currPage
    })
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      currPage: newProps.currPage
    })
  }

  render() {
    <DropDownMenu>
    </DropDownMenu>
  }
}


export default PageSidebar;