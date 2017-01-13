import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';

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
    this.props.onChangeStyleClick(galleryProps, this.props.currComponentId, this.props.currComponent);
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }

  changeSrcInput (e) {
    this.setState({src: e.target.value});
  }

  changeTextInput (e) {
    this.setState({text: e.target.value});
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
    this.props.deleteFocusedComponent(this.props.currComponentId, this.props.currComponent);
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
              <span> Text: </span> <input type='text' value={text} onChange={this.changeTextInput.bind(this)}/>
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

export default GalleryPostContext;