import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const GalleryPost = ({name, style, child, children, onEditorClick, onEditorChildClick = undefined}) => {
  let stopSideProp = (e) => {
    console.log('yoloswag');
    e.stopPropagation();
    onEditorClick();
  }
  if (!child) {
    return (
      <div className='GalleryPost-flexcontainer' style={style} onClick={stopSideProp}>
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
      <div className='GalleryPost-flexcontainer' style={style} onClick={stopBubble}>
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
