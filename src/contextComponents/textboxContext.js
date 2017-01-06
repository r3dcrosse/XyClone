import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../cache/ComponentCache';

class TextboxContext extends Component {
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
      text: '',
      type: ''
    }
  }

  componentDidMount (){
    // console.log('COMPONENT RECEIVED PROPS.', this.props);
    this.setState({
      name: this.props.currComponent.name,
      css: this.props.currComponent.css,
      type: this.props.currComponent.type,
      text: this.props.currComponent.text
    })
  }

  componentWillReceiveProps (newProps) {
    console.log('COMPONENTSWILLRECIEVEPROPS');
    this.setState({
      name: newProps.currComponent.name,
      css: newProps.currComponent.css,
      type: newProps.currComponent.type,
      text: newProps.currComponent.text
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

  changeTextInput (e) {
    this.setState({text: e.target.value});
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
    // console.log('TEXTBOXCONTEXT IS BEING RENDERED');
    let { type, name, css, text } = this.state;
    if (type !== 'Textbox') {
      return (
        <div> SHIT IM NOT A TEXTBOX IM JUST NULL </div>
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
            <span> Text: </span> <input type='text' value={text} onChange={this.changeTextInput.bind(this)}/>
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

export default TextboxContext;