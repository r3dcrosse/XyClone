import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../../../cache/ComponentCache';

import ImageComponent from '../UserComponents/Image/Img';
import Navbar from '../UserComponents/Navbar/Navbar';
import Textbox from '../UserComponents/Textbox/Textbox';
import UserContainerContainer from '../UserComponents/UserContainer/UserContainerContainer'

const UserComponent = ({ componentId, type, onEditorClick, child = false, onEditorChildClick = undefined}) => {
  console.log(componentId);
  console.log('THIS IS STORAGE CURRENTLY', storage);
  console.log('THIS IS THE ACTUAL STORAGE COMPONENT', storage[componentId])
  let style = storage[componentId].css;
  let name = storage[componentId].name;
  switch (type) {
    case 'Navbar':
      let { links } = storage[componentId];
      return <Navbar name={name} links={links} style={style} id={componentId} onEditorClick={onEditorClick}/>;
    case 'Textbox':
      console.log('ADDING A TEXTBOX', componentId)
      let { text } = storage[componentId];
      return <Textbox name={name} style={style} text={text} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'Image':
      let { src, alt } = storage[componentId];
      return <ImageComponent name={name} style={style} src={src} alt={alt} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'UserContainer':
      let { children } = storage[componentId];
      console.log('WHAT KIND OF USERCONTAINER AM I?')
      return <UserContainerContainer name={name} style={style} children={children} onEditorClick={onEditorClick}/>
    default:
      console.log(type);
      return <li>
              ID: {storage[componentId].name}
             </li>
  }
}

UserComponent.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default UserComponent;