import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

class Carousel extends Component {
  constructor(props) {
    super(props)
    // console.log(props, 'THIS IS PROPS');

    this.state = {
      currGallery: ''
    }
  }

  componentWillReceiveProps (newProps){
    console.log(newProps, 'NEWPROPS GOT RECEIVED !!!!!!!!!!!!!!!')
    this.setState({
      currGallery: newProps.children[0]
    })
  }

  stopSideProp (e) {
    e.stopPropagation();
    this.props.onEditorClick();
  }

  deleteCurrComponent(e) {
    e.preventDefault();
    this.props.deleteFocusedComponent(this.props.currComponentId);
  }

  clickNext (e) {
    this.stopSideProp(e)
  }

  clickBack (e) {
    this.stopSideProp(e)
  }

  render() {
    return (
      <div className=''>
      <button onClick={this.clickNext}>NEXT</button>
        <div className='Carousel-flexcontainer' style={this.props.style} onClick={this.stopSideProp.bind(this)} >
          {
            this.props.children.map((referenceObject, i) => {
              return (
                <UserComponent i={i} key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true} onEditorChildClick={() => this.props.onEditorChildClick(referenceObject.componentId)}/>
              )
            }
          )}
        </div>
        <button onClick={this.clickBack}>BACK</button>
      </div>
    )
  }
}

export default Carousel;



