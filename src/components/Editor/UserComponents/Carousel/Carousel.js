import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const Carousel = ({name, style, id, onEditorClick, children, onEditorChildClick}) => {
  return (
    <div className=''>
      <div className='Carousel-flexcontainer' style={style} onClick={onEditorClick} >
      </div>
    </div>
  )
}

export default Carousel;

