import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../../../../cache/ComponentCache';

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
    cssObject.backgroundColor = e.target.value
    console.log(cssObject);
    this.setState({css: cssObject});
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
              <span> Background Color: </span> <input type='text' value={css.backgroundColor} onChange={this.changeBackgroundColor.bind(this)}/>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
}

export default BodyContext;