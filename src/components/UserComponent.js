import React, { Component } from 'react';
import { PropTypes } from 'react'
import { storage } from '../cache/componentCache'

import Navbar from '../userComponents/navbar'
import Textbox from '../userComponents/textbox'
const UserComponent = ({ componentId, type, onEditorClick }) => {
  // Object of all available compoennts
  // grab the type from the componentid
  // reference component type to grab skeleton
  let style = storage[componentId].css;
  let name = storage[componentId].name;
  switch (type) {
    case 'Navbar':
      let links = storage[componentId].links;
      return <Navbar name={name} links={links} style={style} id={componentId} onEditorClick={() => onEditorClick(componentId)}/>;
    case 'Textbox':
      return <Textbox name={name} style={style} id={componentId} onEditorClick={() => onEditorClick(componentId)}/>
    default:
      return <li>
              ID: {storage.componentId}
             </li>
  }
}

UserComponent.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default UserComponent;