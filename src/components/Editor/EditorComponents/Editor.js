import React, { Component } from 'react';
import { PropTypes } from 'react';
import UserComponent from './UserComponent'
require("../../../Basic.less");

const Editor = ({ style, components, onEditorClick, onEditorBodyClick }) => {
  let stopBubble = (e) => {
    console.log('STOP BUBBLE IS CALLED');
    e.stopPropagation();
    onEditorClick(this.componentId);
  };
  console.log('THIS IS THE EDITOR STYLE', style);
  return (
    <div className='editor-inPage'>
      <div style={style} onClick={onEditorBodyClick}>
        {components.map(component => {
          console.log('RENDERING A COMPONENT', component);
          return (
            <UserComponent
              key={component.componentId}
              componentId={component.componentId}
              type={component.type}
              onEditorClick={() => onEditorClick(component.componentId)}
            />
          )
          }
        )}
      </div>
    </div>
  )
}

Editor.propTypes = {
  components: React.PropTypes.array.isRequired,
  onEditorClick: React.PropTypes.func.isRequired
}


export default Editor;

