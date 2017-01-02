import React, { Component } from 'react';
import { PropTypes } from 'react';
import UserComponent from './UserComponent'
require("../basic.less");

const Editor = ({ components, onComponentClick }) => (
  <ul>
    {components.map(component =>
      <UserComponent
        key={component.componentId}
        componentId={component.componentId}
        onClick={() => onComponentClick(component.componentId)}
      />
    )}
  </ul>
)

Editor.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({
    componentId: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onComponentClick: PropTypes.func.isRequired }


export default Editor;
