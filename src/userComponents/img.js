import React, { Component } from 'react';

const ImageComponent = ({name, style, src, id, onEditorClick}) => (
  <div className='flex-item-textbox' style={style} onClick={onEditorClick}>
    <div>
      Image loaded with {id}, {name}
    </div>
    <img src={src} alt=""/>
  </div>
)

export default ImageComponent;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }