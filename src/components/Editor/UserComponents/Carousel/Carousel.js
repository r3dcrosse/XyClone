import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
import RaisedButton from 'material-ui/RaisedButton';


class Carousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: 0,
    }
  }

  componentWillReceiveProps (newProps){
    console.log(newProps, 'NEWPROPS GOT RECEIVED !!!!!!!!!!!!!!!')
    if (newProps.children.length !== 0 && this.state.show === null) {
      this.setState({
        show: 0
      })
    }
  }

  handleTouchTap = () => {
    this.setState({
      openSnack: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnack: false,
    });
  };

  stopSideProp (e) {
    e.stopPropagation();
    if (this.props.swapFlag) {
      let context = this;
      let swapHandler = new Promise(function(resolve, reject) {
        context.props.swapComponents(context.props.id, context.props.currProjectId);
        resolve();
      });
      swapHandler.then(() => {
        saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id)
      });
    } else {
      this.props.onEditorClick();
    }
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
    let currComponentStyle;
    if (this.props.currComponentId === this.props.id) {
      currComponentStyle = 'currComponent-style'
    } else if (this.props.swapFlag){
      currComponentStyle = 'toggle-swap-class';
    } else {
      currComponentStyle = '';
    }

    if (this.props.children.length === 0) {
      return (
      <div className=''>
        <div className={currComponentStyle} style={this.props.style} onClick={this.stopSideProp.bind(this)} >
        </div>
      </div>
    )
    } else {
      return (
        <div className={currComponentStyle}>
        <RaisedButton style={{marginRight: '250px'}} label="Back" onClick={this.clickBack.bind(this)}/> <RaisedButton label="Next" onClick={this.clickNext.bind(this)} />
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
          
        </div>
      )
    }
  }

}

export default Carousel;



