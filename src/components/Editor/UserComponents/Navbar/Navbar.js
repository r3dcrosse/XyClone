import React, { Component } from 'react';
import saveToSessionStorage from '../../../../cache/StorageCache'

const Navbar = ({name, swapFlag, swapComponents, components, currProject, currProjectId, children, style, id, currComponentId, onEditorClick, loginStatus }) => {
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
      let swapHandler = new Promise(function(resolve, reject) {
        swapComponents(id, currProjectId);
        resolve();
      });
      swapHandler.then(() => {
        saveToSessionStorage(components, currProject, loginStatus.id)
      });
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