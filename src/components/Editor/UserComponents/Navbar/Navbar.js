import React, { Component } from 'react';

const Navbar = ({name, links, style, id, onEditorClick}) => {
  let stopSideProp = (e) => {
    e.stopPropagation();
    onEditorClick();
  }
  let linkNames = links.map((link) => {
    return link.linkName;
  })
  return (
    <nav className='flex-item-navbar' style={style} onClick={stopSideProp}>
      <div>
        NAVBAR LOADED with id {id}, {name}, and links: {links}
      </div>
      {
        linkNames.map((link) => {
          return ( <span>link</span> )
        })
      }
    </nav>
  )
}

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
