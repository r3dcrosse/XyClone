import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../cache/componentCache'
require("../basic.less");

class EditorComponent extends Component {

  render() {
    let component = storage[this.props.id];
    // let {css}
    return (
      <div>
        <input/>x
        <button> Set </button>
      </div>
    )
  }
}

export default EditorComponent;

asdfasdfasdfasdfsfsf