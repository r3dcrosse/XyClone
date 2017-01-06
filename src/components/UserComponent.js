import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../cache/ComponentCache';

import ImageComponent from '../userComponents/Img';
import Navbar from '../userComponents/Navbar';
import Textbox from '../userComponents/Textbox';
import UserContainerForIds from '../containers/UserContainerForIds'
const UserComponent = ({ componentId, type, onEditorClick, child = false, onEditorChildClick = undefined}) => {
  console.log(componentId);
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
      return <UserContainerForIds name={name} style={style} children={children} onEditorClick={onEditorClick}/>
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