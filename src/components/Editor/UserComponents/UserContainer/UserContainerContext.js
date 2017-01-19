import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
      addChild: 'Textbox'
    }
  }

  componentDidMount () {
    console.log('COMPONENT RECEIVED PROPS.', this.props);
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
      context.props.onEditorComponentSidebarClick(context.state.addChild, context.props.currComponentId, context.props.currProject);
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
    console.log('UserContainerContext IS BEING RENDERED WITH', this.state);
    let { type, name, css, children } = this.state;
    if (type !== 'UserContainer') {
      return (
        <div> SHIT IM NOT A USERCONTAINER IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
        <div>User Container</div>
        <TextField
          defaultValue={name}
          floatingLabelText="Container Name"
          onChange={this.changeProp.bind(this, 'name', null)}
          onKeyPress={this.handleEnterKeyPress.bind(this)}
          fullWidth={true}
        />
            <div>
              <span> Background Color: </span> <input type='text' value={css.backgroundColor} onChange={this.changeBackgroundColor.bind(this)}/>
            </div>

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

          <div>
            <span> Add a child! </span>
            <form onSubmit={this.changeChildrenInput.bind(this)}>
              <select onChange={this.changeChildType.bind(this)}>
                <option value="Textbox"> Textbox </option>
                <option value="Image"> Image </option>
              </select>
              <input type="submit" value="Add Children"/>
            </form>
          </div>
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

export default UserContainerContext;
