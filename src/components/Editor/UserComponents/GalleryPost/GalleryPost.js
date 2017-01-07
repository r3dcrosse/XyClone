import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const GalleryPost = ({name, style, child, children, onEditorClick, onEditorChildClick = undefined}) => {

  if (!child) {
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
  } else {
    let stopBubble = (e) => {
      if (onEditorChildClick) {
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
