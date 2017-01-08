import React, { Component } from 'react';

const Textbox = ({name, style, text, id, onEditorClick, child, onEditorChildClick = undefined}) => {
  if (!child) {
    let stopSideProp = (e) => {
      e.stopPropagation();
      onEditorClick();
    }
    return (
      <div className='flex-item-textbox' style={style} onClick={stopSideProp}>
        <div>
          {text}
        </div>
      </div>
    )
  } else {
    let stopBubble = (e) => {
      if (onEditorChildClick) {
        onEditorChildClick();
      }
      e.stopPropagation();
    }
    return (
      <div className='flex-item-textbox' style={style} onClick={stopBubble}>
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