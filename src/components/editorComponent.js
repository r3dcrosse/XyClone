import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'react';
import { storage } from '../cache/componentCache'
import { Field, reduxForm } from 'redux-form';

require("../basic.less");


class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      css: {
        backgroundColor: null,
        width: null,
        height: null,
        margin: null
      },
      type: null
    }
    // }
  }
  componentWillReceiveProps(newProps) {
    console.log('COMPONENT RECIEVED PROPS', this.props.currComponent)
    if (newProps.currComponent !== null) {
      let component = newProps.currComponent;
      let { css, type, name } = component;
      this.setState({
        name: name,
        css: {
          backgroundColor: css.backgroundColor,
          width: css.width,
          height: css.height,
          margin: css.margin
        },
        type: type
      })
    }
  }

  changeStylePrep (e) {
    e.preventDefault();
    let newCss = this.state;
    this.props.onChangeStyleClick(newCss, this.props.currComponentId);
    // // console.log('THIS IS NEW PROPS YO /////////////////////', newProps);
    // let component = this.props.currComponent
    // let { css, type, name } = component;
    // var newCss = {
    //   name: this.nameInput,
    //   css: {
    //     backgroundColor: this.colorInput,
    //     height: this.heightInput + 'px',
    //     width: this.widthInput + 'px',
    //     margin: this.marginInput + 'px'
    //   },
    //   type: type
    // }
    // //   name: name,
    // //   css: {
    // //     backgroundColor: css.backgroundColor,
    // //     width: css.width,
    // //     height: css.height,
    // //     margin: css.margin
    // //   },
    // //   type: type
    // // })
  }

  changeNameInput (e) {
    this.setState({name: e.target.value})
  }
  changeBackgroundColor (e) {
    let cssObject = this.state.css;
    css.backgroundColor = e.target.value
    this.setState({css: cssObject});
  }
  changeHeight (e) {
    let cssObject = this.state.css;
    css.height = e.target.value + 'px';
    this.setState({css: cssObject});
  }

  changeWidth (e) {
    let cssObject = this.state.css;
    css.width = e.target.value + 'px';
    this.setState({css: cssObject});
  }

  changeMargin (e) {
    let cssObject = this.state.css;
    css.margin = e.target.value + 'px';
    this.setState({css: cssObject});
  }

  render() {
    if (this.props.currComponent === null) {
      console.log('WHY IS THERENOTHING YET? IM CLICKING', this.state);
      console.log('THIS IS CURRCOMPONENT', this.props.currComponent);
      return (
        <div> NOTHING YET </div>
      )
    } else {
      console.log('THIS IS THE RENDERED COMPONENT THAT I AM CLICKLING', this.props.currComponent);
      console.log('THIS IS THE STATE THAT IS FROM THE RENDERED COMPONENT', this.state)
      let component = this.state;
      let { css, type, name } = component;
      return (
        <div>
          <form onSubmit={this.changeStylePrep.bind(this)}>
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
        </div>
      )
    }
  }
}

// You have to connect() to any reducers that you wish to connect to yourself

export default EditorComponent;
