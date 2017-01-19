import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../../../cache/ComponentCache';

import ImageComponentContainer from '../UserComponents/Image/ImgContainer';
import NavbarContainer from '../UserComponents/Navbar/NavbarContainer';
import TextboxContainer from '../UserComponents/Textbox/TextboxContainer';
import UserContainerContainer from '../UserComponents/UserContainer/UserContainerContainer'
import GalleryPostContainer from '../UserComponents/GalleryPost/GalleryPostContainer'
import CarouselContainer from '../UserComponents/Carousel/CarouselContainer'

const UserComponent = ({ componentId, type, onEditorClick, child = false, onEditorChildClick = undefined}) => {
  // console.log('COMPONENTID', componentId);
  // console.log('TYPE OF COMPONENT', type);
  let style = storage[componentId].css;
  let name = storage[componentId].name;
  let children = storage[componentId].children;
  switch (type) {
    case 'Navbar':
      return <NavbarContainer name={name} children={children} style={style} id={componentId} onEditorClick={onEditorClick}/>;
    case 'Textbox':
      let { text } = storage[componentId];
      return <TextboxContainer name={name} style={style} text={text} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'Image':
      let { src, alt } = storage[componentId];
      return <ImageComponentContainer name={name} style={style} src={src} alt={alt} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'UserContainer':
      return <UserContainerContainer name={name} style={style} id={componentId} children={children} onEditorClick={onEditorClick}/>
    case 'GalleryPost':
      return <GalleryPostContainer name={name} style={style} child={child} children={children} onEditorClick={onEditorClick} onEditorChildClick={onEditorChildClick} id={componentId}/>
    case 'Carousel':
      return <CarouselContainer name={name} style={style} children={children} onEditorClick={onEditorClick} id={componentId}/>
    default:
      return <li>
              ID: {storage[componentId].name}
             </li>
  }
}

export default UserComponent;
