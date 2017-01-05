import React, { Component } from 'react';

const userContainer = ({name, style, id, onEditorClick}) => (
  <div className='userContainer-flexbox' style={style} onClick={onEditorClick}>
    {name}
  </div>
)

export default userContainer;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }