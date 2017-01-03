import React, { Component } from 'react';
import { PropTypes } from 'react';

require("../basic.less");

class EditorComponent extends Component {

  render() {
    let component = storage[this.props.id];
    let {css}
    return (
      <div>
        <input> </input>
        <button> Set </button>
      </div>
      )
    }
  }
}

export default EditorComponent;

