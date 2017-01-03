import React, { Component } from 'react';

const Textbox = ({name, style}) => (
  <div className='flex-item-textbox' style={style}>
    <div>
      TEXTBOX LOADED
    </div>
  </div>
)

export default Textbox;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }