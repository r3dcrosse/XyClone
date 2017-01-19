import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { storage } from '../../../cache/ComponentCache';
import MenuItem from 'material-ui/MenuItem';

class SwapComponents extends Component {
  constructor (props) {
    super(props);
  }

  handleSwapComponents () {
    if (!JSON.stringify(this.props.currComponentId).includes('body')) {
      this.props.toggleFlag();
    }
  }

  render() {
    return (
      <MenuItem onTouchTap={this.handleSwapComponents.bind(this)}>
         Swap
      </MenuItem>
    )
  }
}

export default SwapComponents;
