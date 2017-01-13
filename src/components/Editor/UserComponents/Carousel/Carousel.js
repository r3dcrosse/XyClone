import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

class Carousel extends Component {
  constructor(props) {
    super(props)
    // console.log(props, 'THIS IS PROPS');

    this.state = {
      show: null
    }
  }

  componentWillReceiveProps (newProps){
    console.log(newProps, 'NEWPROPS GOT RECEIVED !!!!!!!!!!!!!!!')
    if (newProps.children.length !== 0 && this.state.show === null) {
      this.setState({
        show: 0,
      })
    }
  }

  stopSideProp (e) {
    e.stopPropagation();
    this.props.onEditorClick();
  }

  clickNext (e) {
    this.setState({
      show: (this.state.show + 1) % this.props.children.length
    });

  }

  clickBack (e) {
    this.setState({
      show: ((this.state.show - 1) + this.props.children.length) % this.props.children.length
    });
  }

  render() {
    if (this.props.children.length === 0) {
      return (
      <div className=''>
        <div className='Carousel-flexcontainer' style={this.props.style} onClick={this.stopSideProp.bind(this)} >
        </div>
      </div>
    )
    } else {
      return (
        <div className=''>
        <button onClick={this.clickNext.bind(this)}>NEXT</button>
          <div className='Carousel-flexcontainer' style={this.props.style} onClick={this.stopSideProp.bind(this)} >
            {
              <UserComponent
              show={this.state.show}
              key={this.props.children[this.state.show].componentId}
              type={this.props.children[this.state.show].type}
              componentId={this.props.children[this.state.show].componentId}
              child={true}
              onEditorChildClick={() =>
                this.props.onEditorChildClick(this.props.children[this.state.show].componentId)
              }/>
            }
          </div>
          <button onClick={this.clickBack.bind(this)}>BACK</button>
        </div>
      )
    }
  }

}

export default Carousel;

          // {
          //   this.props.children.map((referenceObject, i) => {
          //     return (
          //       <UserComponent i={i} key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true} onEditorChildClick={() => this.props.onEditorChildClick(referenceObject.componentId)}/>
          //     )
          //   }
          // )}



