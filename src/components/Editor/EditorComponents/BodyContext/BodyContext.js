import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import { SketchPicker } from 'react-color';

class BodyContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      css: {
        backgroundColor: ''
      }
    }
  }

  componentDidMount () {
    let cssObject = this.state.css;
    cssObject.backgroundColor = storage['body'].css.backgroundColor;
    this.setState({
      css: cssObject
    })
  }

  componentWillReceiveProps (newProps) {
    let cssObject = newProps.currComponent.css;
    storage['body'].css = cssObject;
    console.log(storage);
    this.setState({
      css: cssObject
    })
  }

  prepForDispatch() {
    let backgroundColor = this.state.css.backgroundColor;
    let cssObject = Object.assign({}, this.props.style, {
      backgroundColor: backgroundColor
    });
    this.props.editBodyProps(cssObject);
  }

  handleBackgroundColor (color) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = color.hex;
    this.setState({css: cssObject});
    this.prepForDispatch();
  }

  render() {
    // console.log('BodyContext IS BEING RENDERED');
    let { css } = this.state;
    if (this.props.currComponentId !== 'body') {
      return (
        <div> SHIT IM NOT BODY IM JUST NULL </div>
      )
    } else {
      return (
        <div>
          <div className='bodycontextmenu-text'>Background Color</div>
          <SketchPicker
            color={css.backgroundColor}
            onChange={this.handleBackgroundColor.bind(this)}
          />
        </div>
      )
    }
  }
}

export default BodyContext;
