import React, { Component } from 'react';
import { storage } from '../cache/componentCache'

const Textbox = ({name, style, text, id, onEditorClick, child, onEditorChildClick}) => {
  if (!child) {
    return (
      <div className='flex-item-textbox' style={style} onClick={onEditorClick}>
        <div>
          {text}
        </div>
      </div>
    )
  } else {
    let stopBubble = (e) => {
      onEditorChildClick();
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