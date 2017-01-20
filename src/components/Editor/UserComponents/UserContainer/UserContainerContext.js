import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { SketchPicker } from 'react-color';

class UserContainerContext extends Component {
  constructor(props) {
    super(props);
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
      childSelector: 'Textbox',
      colorPickerButtonText: 'Background Color',
      openColorPicker: false
    }
  }

  componentDidMount () {
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      children: this.props.currComponent.children
    })
  }

  componentWillReceiveProps (newProps) {
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
    });
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    });
  }

  // When enter key is pressed, update all the properties of the img that changed
  handleEnterKeyPress (e) {
    e.key === 'Enter' ? this.prepForDispatch(e) : null;
  }

  handleOpenColorPicker (e) {
    this.state.openColorPicker ?
      this.setState({colorPickerButtonText: 'Background Color'}) :
      this.setState({colorPickerButtonText: 'Close Color Picker'});
    this.setState({openColorPicker: !this.state.openColorPicker});
  }

  handleBackgroundColor (color) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = color.hex;
    this.setState({css: cssObject});
    // this.prepForDispatch();
  }

  handleBackgroundColorComplete () {
    console.log('THIS IS BEING RUN DOE');

    let newProps = this.state;
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onChangeStyleClick(newProps, context.props.currComponentId, context.props.currComponent);
      resolve();
    });
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    });
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

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeChildType (e, index, value) {
    this.setState({childSelector: value});
  }

  changeChildrenInput (e) {
    // THIS IS WHERE THE CHILDREN ARE ADDED/REMOVED
    e.preventDefault();
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onEditorComponentSidebarClick(context.state.childSelector, context.props.currComponentId, context.props.currProject, context.props.loginStatus.id);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
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
    // console.log('UserContainerContext IS BEING RENDERED WITH', this.state);
    let { type, name, css, children, openColorPicker, colorPickerButtonText } = this.state;
    if (type !== 'UserContainer') {
      return (
        <div> SHIT IM NOT A USERCONTAINER IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
          <div>User Container</div>
          <TextField
            value={name}
            floatingLabelText="Container Name"
            onChange={this.changeProp.bind(this, 'name', null)}
            onKeyPress={this.handleEnterKeyPress.bind(this)}
            fullWidth={true}
          />
          <div>Background Color: {css.backgroundColor}</div>
          <RaisedButton
            label={colorPickerButtonText}
            fullWidth={true}
            onClick={this.handleOpenColorPicker.bind(this)}
            style={{marginBottom: '10px', marginTop: '10px'}}
          />
          {
            openColorPicker &&
            <div onMouseUp={this.handleBackgroundColorComplete.bind(this)}>
              <SketchPicker
                color={css.backgroundColor}
                onChange={this.handleBackgroundColor.bind(this)}
              />
            </div>
          }
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
          <SelectField
            floatingLabelText="Child Type"
            fullWidth={true}
            value={this.state.childSelector}
            onChange={this.changeChildType.bind(this)}
          >
            <MenuItem value={"Textbox"} primaryText="Textbox" />
            <MenuItem value={"Image"} primaryText="Image" />
          </SelectField>
          <RaisedButton
            label="Add Child"
            fullWidth={true}
            onClick={this.changeChildrenInput.bind(this)}
            style={{marginBottom: '10px'}}
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

export default UserContainerContext;
