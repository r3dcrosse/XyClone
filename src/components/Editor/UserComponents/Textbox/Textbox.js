import React, { Component } from 'react';
import saveToSessionStorage from '../../../../cache/StorageCache';

const Textbox = ({name, style, text, id, currProjectId, currProject, currComponentId, onEditorClick, child, onEditorChildClick = undefined, swapFlag, swapComponents, components, loginStatus}) => {
  let currComponentStyle;
  if (currComponentId === id) {
    currComponentStyle = 'currComponent-style'
  } else if (swapFlag){
    currComponentStyle = 'toggle-swap-class';
  } else {
    currComponentStyle = '';
  }
  if (!child) {
    let stopSideProp = (e) => {
      e.stopPropagation();
      if (swapFlag) {
        let swapHandler = new Promise(function(resolve, reject) {
          swapComponents(id, currProjectId);
          resolve();
        });
        swapHandler.then(() => {
          saveToSessionStorage(components, currProject, loginStatus.id)
        })
      } else {
        onEditorClick();
      }
    }
    return (
      <div className={'flex-item-textbox ' + currComponentStyle} style={style} onClick={stopSideProp}>
        <div>
          {text}
        </div>
      </div>
    )
  } else {
    let stopBubble = (e) => {
      if (swapFlag) {
        let swapHandler = new Promise(function(resolve, reject) {
          swapComponents(id, currProjectId);
          resolve(saveToSessionStorage(components, currProject, loginStatus.id));
        });
      } else {
        if (onEditorChildClick) {
          onEditorChildClick();
        }
      }
      e.stopPropagation();
    }
    return (
      <div className={'flex-item-textbox ' + currComponentStyle} style={style} onClick={stopBubble}>
        {text}
      </div>
    )
  }
}


export default Textbox;

// Textbox.propTypes = {
//   name: PropTypes.string.isRequired,
//   links: PropTypes.arrayOf(PropTypes.shape({componentId: PropTypes.string.isRequired}).isRequired),
//   css: PropTypes.shape
// }