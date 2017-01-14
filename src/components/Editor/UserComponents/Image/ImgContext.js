import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ImageContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      css: {
        width: '',
        height: '',
        margin: ''
      },
      src: '',
      alt: '',
      type: ''
    }
  }

  componentDidMount (){
    // console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      src: this.props.currComponent.src,
      alt: this.props.currComponent.alt
    })
  }
  componentWillReceiveProps (newProps) {
    // console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: newProps.currComponent.name,
      css: newProps.currComponent.css,
      type: newProps.currComponent.type,
      src: newProps.currComponent.src,
      alt: newProps.currComponent.alt
    })
  }

  prepForDispatch(e) {
    e.preventDefault();
    let newProps = this.state;
    this.props.onChangeStyleClick(newProps, this.props.currComponentId, this.props.currComponent);
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
    this.props.deleteFocusedComponent(this.props.currComponentId, this.props.currComponent);
  }

  render() {
    // console.log('ImageContext IS BEING RENDERED');
    let { type, name, css, src, alt } = this.state;
    if (type !== 'Image') {
      return (
        <div> SHIT IM NOT A IMAGE IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
          <div>{type}</div>
          <TextField
            defaultValue={name}
            floatingLabelText="Image Name"
            onChange={this.changeProp.bind(this, 'name', null)}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            inputStyle={{fontSize: '6pt'}}
            defaultValue={src}
            hintText="http://www.imgur.com/hax1337"
            floatingLabelText="Image Source"
            onChange={this.changeProp.bind(this, 'src')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            defaultValue={alt}
            floatingLabelText="Alternate Text"
            onChange={this.changeProp.bind(this, 'alt')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            defaultValue={css.width}
            floatingLabelText="Width"
            onChange={this.changeProp.bind(this, 'css', 'width')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            defaultValue={css.height}
            floatingLabelText="Height"
            onChange={this.changeProp.bind(this, 'css', 'height')}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <TextField
            defaultValue={css.margin}
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
              style={{marginRight: '5px'}}
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

export default ImageContext;
