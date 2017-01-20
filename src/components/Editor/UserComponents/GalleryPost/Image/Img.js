import React, { Component } from 'react';
import saveToSessionStorage from '../../../../cache/StorageCache';
const ImageComponent = ({name, style, src, swapFlag, components, currProject, loginStatus, alt, id, child, onEditorClick, onEditorChildClick = undefined, currComponentId, swapComponents, currProjectId}) => {
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
        });
      } else {
        onEditorClick();
      }
    }
    return (
      <div className={"flex-item-textbox " + currComponentStyle} style={style} onClick={stopSideProp}>
        <img src={src} alt={alt} style={{"width": "100%", "height": "100%"}}/>
      </div>
    )
  } else {
    let stopBubble = (e) => {
      if (swapFlag) {
        let swapHandler = new Promise(function(resolve, reject) {
          swapComponents(id, currProjectId);
          resolve();
        });
        swapHandler.then(() => {
          saveToSessionStorage(components, currProject, loginStatus.id)
        });
      } else {
        if (onEditorChildClick) {
          onEditorChildClick();
        }
      }
      e.stopPropagation();
    }
    return (
      <div className={"flex-item-textbox " + currComponentStyle} style={style} onClick={stopBubble}>
        <img src={src} alt={alt} style={{"width": "100%", "height": "100%"}}/>
      </div>
    )
  }
}

export default ImageComponent;


