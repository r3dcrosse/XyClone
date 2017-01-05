import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../cache/componentCache';

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
      type: ''
    }
  }
// let defaultCss = {
//       backgroundColor: 'red',
//       width: '400px',
//       height: '400px',
//       margin: '10px'
//     }
//     let component = {
//       name: 'Default User Container',
//       css: defaultCss,
//       children: []
//     }
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
    this.props.onChangeStyleClick(newProps, this.props.currComponentId);
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeChildrenInput (e) {
    // THIS IS WHERE THE CHILDREN ARE ADDED/REMOVED
    e.preventDefault();
    this.props.onEditorComponentSidebarClick('Textbox', this.props.currComponentId);
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

  render() {
    console.log('UserContainerContext IS BEING RENDERED WITH', this.state);
    let { type, name, css, children } = this.state;
    if (type !== 'UserContainer') {
      return (
        <div> SHIT IM NOT A USERCONTAINER IM JUST NULL </div>
      )
    } else {
      return (
        <div>
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
            <form onSubmit={this.changeChildrenInput.bind(this)}>
              <input type="submit" value="Add Children"/>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default UserContainerContext;