import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';


// NOW TEXTBOX HAVE THE SAME NAME. WILL TRIGGER AN ACTION
var Types = {
  TEXTBOX: 'textbox',
  NAVBAR: 'navbar'
};

var EditorFunctions = {
  drop: function (props, monitor, component) {
    console.log('GOT ITEM');

    // Obtain the dragged item
    var item = monitor.getItem();
    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position);
    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method

    return { moved: true };
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget()
  };
}


class Editor extends Component {

  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className='EditorView' style={{"float": 'right'}}>
        <div>DROP IT HERE. THEN CHECK CONSOLE.LOG </div>
      </div>
    )
  }
}


// DROP TARGET TAKES 3 ARGUMENTS
var typeArray = [];
for (var key in Types) {
  typeArray.push(Types[key]);
}
export default DropTarget(typeArray, EditorFunctions, collect)(Editor);
