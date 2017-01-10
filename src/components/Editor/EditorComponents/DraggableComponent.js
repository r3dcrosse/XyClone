import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Draggable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseDown(e) {
    if (e.button !== 0) return;
    const ref = ReactDOM.findDOMNode(this.refs.dragTarget);
    const body = document.body;
    const box = ref.getBoundingClientRect();
    console.log(box.left, 'THIS IS BOX.LEFT');
    console.log(body.scrollLeft)
    this.setState({
      relX: e.pageX - (box.left),
      relY: e.pageY - (box.top)
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp (e) {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove (e) {
    this.props.onMove({
      x: e.pageX - this.state.relX,
      y: e.pageY - this.state.relY
    });
  }

  render() {
    return (
      <div onMouseDown={this.onMouseDown} style={{ position: 'fixed', left: this.props.x, top: this.props.y }} ref="dragTarget" className='editor-component'>
        {this.props.children}
      </div>
    )
  }
}

export default Draggable;
