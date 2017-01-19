import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache'

class CarouselContext extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: '',
      css: {
        backgroundColor: '',
        width: '',
        height: '',
        margin: ''
      },
      children: [],
      type: '',
      addChild: 'GalleryPost'
    }
  }

  componentDidMount (){
    console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      children: this.props.currComponent.children
    })
  }

  componentWillReceiveProps (newProps){
    console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: newProps.currComponent.name,
      css: newProps.currComponent.css,
      type: newProps.currComponent.type,
      children: newProps.currComponent.children
    })
  }

  prepForDispatch(e) {
    e.preventDefault();
    let newProps = this.state;
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onChangeStyleClick(newProps, context.props.currComponentId, context.props.currComponent);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeChildType (e) {
    let options = e.target.options;
    let addChildType = '';
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        addChildType = options[i].value
      }
    }
    this.setState({addChild: addChildType});
  }

  changeChildrenInput (e) {
    // THIS IS WHERE THE CHILDREN ARE ADDED/REMOVED
    e.preventDefault();
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onEditorComponentSidebarClick(context.state.addChild, context.props.currComponentId, context.props.currProject, context.props.loginStatus.id);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  changeBackgroundColor (e) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = e.target.value
    this.setState({css: cssObject});
  }

  changeHeight (e) {
    let cssObject = this.state.css;
    cssObject.height = e.target.value;
    this.setState({css: cssObject});
  }

  changeWidth (e) {
    let cssObject = this.state.css;
    cssObject.width = e.target.value;
    this.setState({css: cssObject});
  }

  changeMargin (e) {
    let cssObject = this.state.css;
    cssObject.margin = e.target.value;
    this.setState({css: cssObject});
  }



  deleteCurrComponent(e) {
    e.preventDefault();
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.deleteFocusedComponent(context.props.currComponentId, context.props.currComponent);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  render() {
    console.log('CAROUSELContainerContext IS BEING RENDERED WITH', this.state);
    let { type, name, css, children } = this.state;
    if (type !== 'Carousel') {
      return (
        <div> SHIT IM NOT A CAROUSEL IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
          <form onSubmit={this.prepForDispatch.bind(this)}>
            <div>
              <div> {type} </div>
            </div>
            <div>
              <span> Name: </span> <input type='text' value={name} onChange={this.changeNameInput.bind(this)}/>
            </div>
            <div>
              <span> Background Color: </span> <input type='text' value={css.backgroundColor} onChange={this.changeBackgroundColor.bind(this)}/>
            </div>
            <div>
              <span> Width: </span> <input type='text' value={css.width} onChange={this.changeWidth.bind(this)}/>
            </div>
            <div>
              <span> Height: </span> <input type='text' value={css.height} onChange={this.changeHeight.bind(this)}/>
            </div>
            <div>
              <span> Margin: </span> <input type='text' value={css.margin} onChange={this.changeMargin.bind(this)}/>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <div>
            <span> Add a child! </span>
            <form onSubmit={this.changeChildrenInput.bind(this)}>
              <select onChange={this.changeChildType.bind(this)}>
                <option value="GalleryPost"> Gallery Post </option>
              </select>
              <input type="submit" value="Add Children"/>
            </form>
          </div>
          <form onSubmit={this.deleteCurrComponent.bind(this)}>
            <input type="submit" value="Delete Component" />
          </form>
        </div>
      )
    }
  }
}

export default CarouselContext;
