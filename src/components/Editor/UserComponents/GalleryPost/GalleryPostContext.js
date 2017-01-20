import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { SketchPicker } from 'react-color';

class GalleryPostContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      css: {
        width: '',
        height: '',
        margin: ''
      },
      type: '',
      children: [],
      src: '',
      text: ''
    }
  }

  componentDidMount (){
    console.log('COMPONENT RECEIVED PROPS.', this.props);
    let src = storage[storage[this.props.currComponentId].children[0].componentId].src;
    let text = storage[storage[this.props.currComponentId].children[1].componentId].text;
    // let text = storage[this.props.currComponentId].children[1].text;
    console.log('GETTING SORUCE AND TEXT %%%%%%%%%%%%%%%%%%%%%%', src, text);
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      children: this.props.currComponent.children,
      src: src,
      text: text
    })
  }

  componentWillReceiveProps (newProps) {
    console.log('COMPONENTS WILLRECEIVEPROPS WORKED', newProps);
    let src = storage[storage[this.props.currComponentId].children[0].componentId].src;
    let text = storage[storage[this.props.currComponentId].children[1].componentId].text;
    this.setState({
      name: newProps.currComponent.name,
      css: newProps.currComponent.css,
      type: newProps.currComponent.type,
      children: newProps.currComponent.children,
      src: src,
      text: text
    })
  }

  prepForDispatch(e) {
    // THIS IS WHERE WE REASSEMBLE THE NEW PROPS
    e.preventDefault();
    let newPropsValues = this.state;

    storage[storage[this.props.currComponentId].children[0].componentId].src = newPropsValues.src;
    storage[storage[this.props.currComponentId].children[1].componentId].text = newPropsValues.text;

    let galleryProps = {
      name: newPropsValues.name,
      css: newPropsValues.css,
      type: newPropsValues.type,
      children: newPropsValues.children
    }

    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onChangeStyleClick(galleryProps, context.props.currComponentId, context.props.currComponent);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  // When enter key is pressed, update all the properties of the img that changed
  handleEnterKeyPress (e) {
    e.key === 'Enter' ? this.prepForDispatch(e) : null;
  }

  // Use this to update the properties of the component in state
  changeProp (propertyToSet, cssProp, context, val) {
    if (cssProp) {
      let cssObject = this.state.css;
      cssObject[cssProp] = val;
      this.setState({ css : cssObject });
    } else {
      this.setState({ [propertyToSet] : val });
    }
  }

  deleteCurrComponent(e) {
    e.preventDefault();
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.deleteFocusedComponent(context.props.currComponentId, context.props.currComponent);
      resolve();
    })
    dispatchHandler.then(() => {
      let newComponents = context.props.components.filter((component) => { return component.componentId !== context.props.currComponentId});
      console.log(newComponents)
      saveToSessionStorage(newComponents, context.props.currProject, context.props.loginStatus.id);    })
  }


  render() {
    // console.log('GalleryPostContext IS BEING RENDERED');
    let { type, name, css, src, text } = this.state;
    if (type !== 'GalleryPost') {
      return (
        <div> SHIT IM NOT A GalleryPost IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
          <div>Gallery Post</div>
          <TextField
            value={name}
            floatingLabelText="GalleryPost Name"
            onChange={this.changeProp.bind(this, 'name', null)}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            value={src}
            floatingLabelText="Image Source"
            onChange={this.changeProp.bind(this, 'src', null)}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            value={text}
            floatingLabelText="Text"
            onChange={this.changeProp.bind(this, 'text', null)}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            value={css.width}
            floatingLabelText="Width"
            onChange={this.changeProp.bind(this, 'css', 'width')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            value={css.height}
            floatingLabelText="Height"
            onChange={this.changeProp.bind(this, 'css', 'height')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            value={css.margin}
            floatingLabelText="Margin"
            onChange={this.changeProp.bind(this, 'css', 'margin')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <span>
            <RaisedButton
              label="Save"
              primary={true}
              onClick={this.prepForDispatch.bind(this)}
              style={{marginRight: '5px', marginBottom: '5px'}}
            />
            <RaisedButton
              label="Delete"
              secondary={true}
              onClick={this.deleteCurrComponent.bind(this)}
            />
          </span>
        </div>
      )
    }
  }
}

export default GalleryPostContext;
