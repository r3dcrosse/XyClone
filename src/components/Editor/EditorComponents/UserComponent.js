import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../../../cache/ComponentCache';

import ImageComponent from '../UserComponents/Image/Img';
import Navbar from '../UserComponents/Navbar/Navbar';
import Textbox from '../UserComponents/Textbox/Textbox';
import UserContainerContainer from '../UserComponents/UserContainer/UserContainerContainer'
import GalleryPost from '../UserComponents/GalleryPost/GalleryPost'

const UserComponent = ({ componentId, type, onEditorClick, child = false, onEditorChildClick = undefined}) => {
  console.log('COMPONENTID', componentId);
  console.log('TYPE OF COMPONENT', type);
  let style = storage[componentId].css;
  let name = storage[componentId].name;
  let children = storage[componentId].children;
  switch (type) {

    case 'Navbar':
      return <Navbar name={name} children={children} style={style} id={componentId} onEditorClick={onEditorClick}/>;

    case 'Textbox':
      let { text } = storage[componentId];
      return <Textbox name={name} style={style} text={text} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>

    case 'Image':
      let { src, alt } = storage[componentId];
      return <ImageComponent name={name} style={style} src={src} alt={alt} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>

    case 'UserContainer':
      return <UserContainerContainer name={name} style={style} children={children} onEditorClick={onEditorClick}/>

    case 'GalleryPost':
      return <GalleryPost name={name} style={style} children={children} onEditorClick={onEditorClick}/>

    default:
      return <li>
              ID: {storage[componentId].name}
             </li>
  }
}

UserComponent.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default UserComponent;