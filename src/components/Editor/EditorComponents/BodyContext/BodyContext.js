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
      },
      showColorPicker: false
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

  prepForDispatch(e) {
    e.preventDefault();
    let backgroundColor = this.state.css.backgroundColor;
    let cssObject = Object.assign({}, this.props.style, {
      backgroundColor: backgroundColor
    });
    this.props.editBodyProps(cssObject);
  }

  changeBackgroundColor (e) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = e.target.value;
    console.log(cssObject);
    this.setState({css: cssObject});
  }

  handleBackgroundColor (color) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = color.hex;
    console.log(cssObject);
    this.setState({css: cssObject});
  }

  showTheColorPicker () {
    this.setState({showColorPicker: !this.state.showColorPicker});
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
          <form onSubmit={this.prepForDispatch.bind(this)}>
            <div>
              <span> Background Color: </span>
              <input type='text' value={css.backgroundColor} onChange={this.changeBackgroundColor.bind(this)}/>
              <div style={{
                height: '20px',
                width: '80px',
                cursor: 'pointer',
                backgroundColor: css.backgroundColor}}
                onClick={this.showTheColorPicker.bind(this)}
              />
              {
                this.state.showColorPicker &&
                <SketchPicker
                  color={css.backgroundColor}
                  onChangeComplete={this.handleBackgroundColor.bind(this)}
                />
              }
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
}

export default BodyContext;
