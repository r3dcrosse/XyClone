import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const Carousel = ({name, style, id, onEditorClick, children, onEditorChildClick}) => {
  let stopSideProp = (e) => {
    e.stopPropagation();
    onEditorClick();
  }
  return (
    <div className=''>
      <div className='Carousel-flexcontainer' style={style} onClick={stopSideProp} >
        {
          children.map((referenceObject) => {
            console.log("THIS IS THE REFERENCE OBJECT ==========================", referenceObject);
            return (
              <UserComponent key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true} onEditorChildClick={()=> onEditorChildClick(referenceObject.componentId)}/>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Carousel;

