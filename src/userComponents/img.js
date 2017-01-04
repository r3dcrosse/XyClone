import React, { Component } from 'react';

const Image = ({name, style, id, onEditorClick}) => (
  <div className='flex-item-textbox' style={style} onClick={onEditorClick}>
    <div>
      TEXTBOX LOADED with id {id}
    </div>
  </div>
)

export default Image;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }