import React, { Component } from 'react';

const Textbox = ({name, style, text, id, onEditorClick}) => (
  <div className='flex-item-textbox' style={style} onClick={onEditorClick}>
    <div>
      {text}
    </div>
  </div>
)

export default Textbox;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }