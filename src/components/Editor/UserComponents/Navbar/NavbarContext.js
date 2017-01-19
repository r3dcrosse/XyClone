import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class NavbarContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewLinkBox: false,
      name: '',
      css: {
        backgroundColor: '',
        width: '',
        height: '',
        margin: ''
      },
      children: [],
      type: '',
      links: [
        {
          linkName: 'Home',
          route: 'IndexPage'
        },
        {
          linkName: 'Tester',
          route: 'Test'
        }
      ]
    }
  }

  componentDidMount (){
    // console.log('COMPONENT RECEIVED PAGES.', this.props.pages);
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      links: this.props.currComponent.links
    })
  }

  componentWillReceiveProps (newProps){
    // console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: newProps.currComponent.name,
      css: newProps.currComponent.css,
      type: newProps.currComponent.type,
      links: newProps.currComponent.links
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

  changeLinksInput (e) {
    this.setState({children: e.target.value});
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

  // When enter key is pressed, update all the properties of the img that changed
  handleEnterKeyPress (e) {
    e.key === 'Enter' ? this.prepForDispatch(e) : null;
  }

  // Adds a new link to the navbar
  handleAddNavbarLink (e) {
    console.log('TRYING TO ADD NEW NAVBAR LINK!!!!');
  }

  handleOpenAddNavbarBox = () => {
    this.setState({openNewLinkBox: true});
  }

  handleClose = () => {
    this.setState({openNewLinkBox: false});
  };

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
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  render() {
    // console.log('NavbarContext IS BEING RENDERED');
    let { type, name, css, links } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Add Link"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAddNavbarLink}
      />,
    ];
    if (type !== 'Navbar') {
      return (
        <div> SHIT IM NOT A NAVBAR IM JUST NULL </div>
      )
    } else {
      return (
        <div className="imagecontext-container">
          <div> {type} </div>
          <TextField
            defaultValue={name}
            floatingLabelText="Navbar Name"
            onChange={this.changeProp.bind(this, 'name', null)}
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
          <div>
            <span> Background Color: </span> <input type='text' value={css.backgroundColor} onChange={this.changeBackgroundColor.bind(this)}/>
          </div>
          <div>
            <span> Links: </span> <input type='text' value={links} onChange={this.changeLinksInput.bind(this)}/>
          </div>
          <div>Links:</div>
          {
            links.map((link) => {
              return (
                <div>
                  <span>{link.linkName}</span><span>{link.route}</span>
                </div>
              )
            })
          }
          <RaisedButton
            label="Add Navbar Link"
            onClick={this.handleOpenAddNavbarBox.bind(this)}
            style={{marginBottom: '5px'}}
          />
          <Dialog
            title="Add a new navbar link"
            actions={actions}
            modal={false}
            open={this.state.openNewLinkBox}
            onRequestClose={this.handleClose}
          >
            <div>Connect your pages to links on a navbar.</div>
            <TextField
              hintText='Cooler Page'
              floatingLabelText="Link Name"

              onKeyPress={this.handleEnterKeyPress.bind(this)}
              fullWidth={true}
            />
            <TextField
              hintText='/coolerPage'
              floatingLabelText="Page for Link"

              onKeyPress={this.handleEnterKeyPress.bind(this)}
              fullWidth={true}
            />
          </Dialog>


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

export default NavbarContext;
