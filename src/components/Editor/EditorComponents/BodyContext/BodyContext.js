import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';
import saveToSessionStorage from '../../../../cache/StorageCache';
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
    cssObject.backgroundColor = storage['body' + this.props.currProjectId].css.backgroundColor;
    this.setState({
      css: cssObject
    });
  }

  componentWillReceiveProps (newProps) {
    let cssObject = newProps.currComponent.css;
    storage['body'+ this.props.currProjectId].css = cssObject;
    // console.log(storage);
    this.setState({
      css: cssObject
    });
  }

  prepForDispatch() {
    let backgroundColor = this.state.css.backgroundColor;
    let cssObject = Object.assign({}, this.props.currComponent.css, {
      backgroundColor: backgroundColor
    });
    this.props.editBodyProps(cssObject, this.props.currProjectId);

  }

  handleBackgroundColor (color) {
    let cssObject = this.state.css;
    cssObject.backgroundColor = color.hex;
    this.setState({css: cssObject});
    this.prepForDispatch();
  }

  handleBackgroundColorComplete () {
    console.log('THIS IS BEING RUN DOE');
    saveToSessionStorage(this.props.components, this.props.currProject, this.props.loginStatus.id);
  }

  render() {
    // console.log('BodyContext IS BEING RENDERED');
    let { css } = this.state;
    if (this.props.currComponentId !== 'body' + this.props.currProjectId) {
      return (
        <div> SHIT IM NOT BODY IM JUST NULL </div>
      )
    } else {
      console.log('IM BEIGN RENDERED BODHYYYYYYYYYY');
      return (
        <div className='bodycontext-container' onMouseUp={this.handleBackgroundColorComplete.bind(this)}>
          <div className='bodycontext-menu'>Body Color</div>
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
