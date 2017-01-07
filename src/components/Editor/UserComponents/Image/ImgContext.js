import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';

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
    this.props.onChangeStyleClick(newProps, this.props.currComponentId);
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeSrcInput (e) {
    this.setState({src: e.target.value});
  }

  changeAlternativeInput(e) {
    this.setState({alt: e.target.value});
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
    this.props.deleteFocusedComponent(this.props.currComponentId);
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
        <div>
          <form onSubmit={this.prepForDispatch.bind(this)}>
            <div>
              <div> {type} </div>
            </div>
            <div>
              <span> Name: </span> <input type='text' value={name} onChange={this.changeNameInput.bind(this)}/>
            </div>
            <div>
              <span> Source: </span> <input type='text' value={src} onChange={this.changeSrcInput.bind(this)}/>
            </div>
            <div>
              <span> Alternative: </span> <input type='text' value={alt} onChange={this.changeAlternativeInput.bind(this)}/>
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
          <form onSubmit={this.deleteCurrComponent.bind(this)}>
            <input type="submit" value="Delete Component" />
          </form>
        </div>
      )
    }
  }
}

export default ImageContext;