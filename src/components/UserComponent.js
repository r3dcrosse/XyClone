import React, { Component } from 'react';
import { PropTypes } from 'react';
import { storage } from '../cache/componentCache';

import ImageComponent from '../userComponents/img';
import Navbar from '../userComponents/navbar';
import Textbox from '../userComponents/textbox';
import UserContainerForIds from '../containers/userContainerForIds'
const UserComponent = ({ componentId, type, onEditorClick, child = false, onEditorChildClick = undefined}) => {
  console.log(componentId);
  let style = storage[componentId].css;
  let name = storage[componentId].name;
  switch (type) {
    case 'Navbar':
      let links = storage[componentId].links;
      return <Navbar name={name} links={links} style={style} id={componentId} onEditorClick={onEditorClick}/>;
    case 'Textbox':
      console.log('ADDING A TEXTBOX', componentId)
      let text = storage[componentId].text;
      return <Textbox name={name} style={style} text={text} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'Image':
      let src = storage[componentId].src;
      return <ImageComponent name={name} style={style} src={src} id={componentId} onEditorClick={onEditorClick} child={child} onEditorChildClick={onEditorChildClick}/>
    case 'UserContainer':
      let children = storage[componentId].children;
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