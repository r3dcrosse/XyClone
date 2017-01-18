import React, { Component } from 'react';

const ImageComponent = ({name, style, src, alt, id, child, onEditorClick, onEditorChildClick = undefined}) => {
  let stopSideProp = (e) => {
    e.stopPropagation();
    onEditorClick();
  }
  if (!child) {
    return (
      <div className='flex-item-textbox' style={style} onClick={stopSideProp}>
        <img src={src} alt={alt} style={{"width": "100%", "height": "100%"}}/>
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
        <img src={src} alt={alt} style={{"width": "100%", "height": "100%"}}/>
      </div>
    )
  }
}

export default ImageComponent;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }

