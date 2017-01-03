import React, { Component } from 'react';

const Textbox = ({name, style}) => (
  <nav style={style}>
    <ul>
      <li> TEXTBOX LOADED</li>
    </ul>
  </nav>
)

export default Textbox;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }