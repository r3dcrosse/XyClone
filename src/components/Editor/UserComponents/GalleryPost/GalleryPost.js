import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'
import saveToSessionStorage from '../../../../cache/StorageCache'

const GalleryPost = ({name, style, currProjectId, swapFlag, swapComponents, id, currComponentId, child, children, onEditorClick, onEditorChildClick = undefined, loginStatus, components }) => {
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
        swapHandler.then(()=> {
          saveToSessionStorage(components, currProjectId, loginStatus.id)
        })
      } else {
        onEditorClick();
      }
    }
    return (
      <div className={"GalleryPost-flexcontainer " + currComponentStyle} style={style} onClick={stopSideProp}>
        {
          children.map((referenceObject) => {
            console.log("THIS IS AN IMAGE/TEXTBOX IN GALLERYPOST", referenceObject);
            return (
              <UserComponent key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true} />
            )
          }
        )}
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
      <div className={'GalleryPost-flexcontainer ' + currComponentStyle} style={style} onClick={stopBubble}>
        {
          children.map((referenceObject) => {
            console.log("THIS IS AN IMAGE/TEXTBOX IN GALLERYPOST", referenceObject);
            return (
              <UserComponent key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true}/>
            )
          }
        )}
      </div>
    )
  }
}

export default GalleryPost;
