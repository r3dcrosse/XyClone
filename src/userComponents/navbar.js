import React, { Component } from 'react';

const Navbar = ({name, links, style}) => (
  <nav style={style}>
    <ul>
      <li> NAV BAR LOADED</li>
    </ul>
  </nav>
)

export default Navbar;
// Editor.propTypes = {
//     components: PropTypes.arrayOf(PropTypes.shape({
//     componentId: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onComponentClick: PropTypes.func.isRequired }

// Navbar.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }