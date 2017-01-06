import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../cache/ComponentCache'

import TextboxContextContainer from '../containers/TextboxContextContainer'
import NavbarContextContainer from '../containers/NavbarContextContainer';
import ImageContextContainer from '../containers/ImgContextContainer';
import UserContainerContextContainer from '../containers/UserContainerContextContainer'
require("../Basic.less");


const EditorComponent = (props) => {
  if (props.currComponent === null) {
    // console.log('WHY IS THERENOTHING YET? IM CLICKING', this.state);
    // console.log('THIS IS CURRCOMPONENT', this.props.currComponent);
    return (
      <div> NOTHING YET </div>
    )
  } else {
    // console.log('THIS IS THE RENDERED COMPONENT THAT I AM CLICKLING', this.props.currComponent);
    let component = props.currComponent
    let { type } = component;
    switch (type) {
      case "Textbox":
        return (
          <TextboxContextContainer/>
        )
      case "Navbar":
        return (
          <NavbarContextContainer/>
        )
      case "Image":
        return (
          <ImageContextContainer/>
        )
      case "UserContainer":
        return (
          <UserContainerContextContainer/>
        )
      default:
        return (
          <div> CASE DEFAULTED </div>
        )

    }
  }
}
// You have to connect() to any reducers that you wish to connect to yourself

export default EditorComponent;
