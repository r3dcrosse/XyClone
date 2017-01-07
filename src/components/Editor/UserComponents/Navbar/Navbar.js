import React, { Component } from 'react';

const Navbar = ({name, children, style, id, onEditorClick}) => (
  <nav className='flex-item-navbar' style={style} onClick={onEditorClick}>
    <div>
      NAVBAR LOADED with id {id}, {name}
    </div>
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