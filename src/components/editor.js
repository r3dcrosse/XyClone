import React, { Component } from 'react';
import { PropTypes } from 'react';
import UserComponent from './UserComponent'
require("../basic.less");

const Editor = ({ components }) => (
  <div style={{"float":"right"}}>
    <ul>
      {components.map(component =>
        <UserComponent
          key={component.componentId}
          componentId={component.componentId}
          type={component.type}
        />
      )}
    </ul>
  </div>
)

Editor.propTypes = {
  components: React.PropTypes.array.isRequired
}


export default Editor;

