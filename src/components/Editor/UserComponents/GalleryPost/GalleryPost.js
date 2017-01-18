import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const GalleryPost = ({name, style, id, currComponentId, child, children, onEditorClick, onEditorChildClick = undefined}) => {
  let stopSideProp = (e) => {
    console.log('yoloswag');
    e.stopPropagation();
    onEditorClick();
  }
  let currComponentStyle;
  if (currComponentId === id) {
    currComponentStyle = 'currComponent-style'
  } else {
    currComponentStyle = '';
  }

  if (!child) {
    return (
      <div className={"GalleryPost-flexcontainer " + currComponentStyle} style={style} onClick={stopSideProp}>
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
  } else {
    let stopBubble = (e) => {
      console.log('FUCK ME')
      if (onEditorChildClick) {
        console.log('NEVER HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        onEditorChildClick();
      }
      e.stopPropagation();
    }
    return (
      <div className='GalleryPost-flexcontainer currComponent-style' style={style} onClick={stopBubble}>
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
