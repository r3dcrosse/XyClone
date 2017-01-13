import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../cache/ComponentCache'

import BodyContextContainer from './BodyContext/BodyContextContainer'

import TextboxContextContainer from '../UserComponents/Textbox/TextboxContextContainer'
import NavbarContextContainer from '../UserComponents/Navbar/NavbarContextContainer';
import ImageContextContainer from '../UserComponents/Image/ImgContextContainer';
import UserContainerContextContainer from '../UserComponents/UserContainer/UserContainerContextContainer'
import GalleryPostContextContainer from '../UserComponents/GalleryPost/GalleryPostContextContainer'
import CarouselContextContainer from '../UserComponents/Carousel/CarouselContextContainer'
require("../../../Basic.less");
import Draggable from './DraggableComponent.js';

class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '70%',
      y: '20%',
      currComponent: '',
      currComponentId: '',

    }
  }
  componentDidMount () {
    this.setState({
      currComponent: this.props.currComponent,
      currComponentId: this.props.currComponentId
    })
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      currComponent: newProps.currComponent,
      currComponentId: newProps.currComponentId
    })
  }

  move(e) {
    this.setState(e);
  }

  render() {
    let contextToRender;
    console.log(this.props, 'THESE ARE THE PROPS');
    console.log(this.props.currComponentId, 'THIS IS CURRCOMPONENT ID');
    if (this.props.currComponent === null) {
      console.log('GOING TO RENDER THIS SHIT');
      return null;
    } else if (this.props.currComponentId === 'body' + this.props.currProjectId) {
      return (
        <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
          <BodyContextContainer />
        </Draggable>
      )
    } else {
      let component = this.props.currComponent
      let { type } = component;
      switch (type) {
        case "Textbox":
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <TextboxContextContainer/>
            </Draggable>
          )
        case "Navbar":
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <NavbarContextContainer/>
            </Draggable>
          )
        case "Image":
          console.log('running through THIS CASEEEEEEEEEEEEEE');
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <ImageContextContainer/>
            </Draggable>
          )
        case "UserContainer":
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <UserContainerContextContainer/>
            </Draggable>
          )
        case "GalleryPost":
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <GalleryPostContextContainer/>
            </Draggable>
          )
        case "Carousel":
          return (
            <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
              <CarouselContextContainer/>
            </Draggable>
          )
        default:
          return contextToRender = null
      }
    }
  }
}


export default Context;
 /* <Draggable x={this.state.x} y={this.state.y} onMove={this.move.bind(this)}>
          {contextToRender}
        </Draggable> */
