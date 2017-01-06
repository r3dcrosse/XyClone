import React, { Component } from 'react';
import { PropTypes } from 'react';
import UserComponent from './UserComponent'
require("../../Basic.less");

const Editor = ({ components, onEditorClick }) => (
  <div className='editor-inPage'>
    <div className='flex-container'>
      {components.map(component =>
        <UserComponent
          key={component.componentId}
          componentId={component.componentId}
          type={component.type}
          onEditorClick={() => onEditorClick(component.componentId)}
        />
      )}
    </div>
  </div>
)
Editor.propTypes = {
  components: React.PropTypes.array.isRequired,
  onEditorClick: React.PropTypes.func.isRequired
}


export default Editor;

