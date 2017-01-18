import React, { Component } from 'react';

const Textbox = ({name, style, text, id, currProjectId, currComponentId, onEditorClick, child, onEditorChildClick = undefined, swapFlag, swapComponents}) => {
  let currComponentStyle;
  if (currComponentId === id) {
    currComponentStyle = 'currComponent-style'
  } else if (swapFlag){
    currComponentStyle = 'toggle-swap-class';
  } else {
    currComponentStyle = '';
  }

  if (!child) {
    let stopSideProp = (e) => {
      e.stopPropagation();
      if (swapFlag) {
        swapComponents(id, currProjectId);
      } else {
        onEditorClick();
      }
    }
    return (
      <div className={'flex-item-textbox ' + currComponentStyle} style={style} onClick={stopSideProp}>
        <div>
          {text}
        </div>
      </div>
    )
  } else {
    let stopBubble = (e) => {
      if (swapFlag) {
        swapComponents(id, currProjectId);
      } else {
        if (onEditorChildClick) {
          onEditorChildClick();
        }
      }
      e.stopPropagation();
    }
    return (
      <div className={'flex-item-textbox ' + currComponentStyle} style={style} onClick={stopBubble}>
        <div>
          {text}
        </div>
      </div>
    )
  }
}


export default Textbox;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }