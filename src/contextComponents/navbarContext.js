import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../cache/componentCache';

class NavbarContext extends Component {
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
      links: [],
      type: ''
    }
  }

  componentDidMount (){
    // console.log('COMPONENT RECEIVED PROPS.', this.props);
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
    this.props.onChangeStyleClick(newProps, this.props.currComponentId);
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeLinksInput (e) {
    this.setState({links: e.target.value});
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
    // console.log('NavbarContext IS BEING RENDERED');
    let { type, name, css, links } = this.state;
    if (type !== 'Navbar') {
      return (
        <div> SHIT IM NOT A NAVBAR IM JUST NULL </div>
      )
    } else {
      return (
        <form onSubmit={this.prepForDispatch.bind(this)}>
          <div>
            <div> {type} </div>
          </div>
          <div>
            <span> Name: </span> <input type='text' value={name} onChange={this.changeNameInput.bind(this)}/>
          </div>
          <div>
            <span> Links: </span> <input type='text' value={links} onChange={this.changeLinksInput.bind(this)}/>
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
      )
    }
  }
}

export default NavbarContext;