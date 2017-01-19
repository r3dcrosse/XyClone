import React, { Component } from 'react';

const Navbar = ({name, swapFlag, swapComponents, currProjectId, children, style, id, currComponentId, onEditorClick}) => {
  let currComponentStyle;
  if (currComponentId === id) {
    currComponentStyle = 'currComponent-style'
  } else if (swapFlag){
    currComponentStyle = 'toggle-swap-class';
  } else {
    currComponentStyle = '';
  }
  let stopSideProp = (e) => {
    e.stopPropagation();
    if (swapFlag) {
      swapComponents(id, currProjectId)
    } else {
      onEditorClick();
    }
  }
  return (
    <nav className={'flex-item-navbar ' + currComponentStyle} style={style} onClick={stopSideProp}>
      <div>
        NAVBAR LOADED with id {id}, {name}
      </div>
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