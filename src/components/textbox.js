import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';


// OTHER SIDE WILL ONLY GRAB IF THE TYPE IS THE SAME. MAKE SURE ITS THE SAME IN EDITOR
const Types = {
  TEXTBOX: 'textbox'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const TextboxFunctions = {
  beginDrag(props, monitor, component) {
    console.log('DRAGGIN ITEM');
    // Return the data describing the dragged item
    return {item: component};
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource()
    // You can ask the monitor about the current drag state:
  };
}


class Textbox extends Component{
  render() {
    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <div> TEXTBOX </div>
      </div>
    )
  }
};


// DRAG SOURCE TAKES 3 ARGUMENTS
export default DragSource(Types.TEXTBOX, TextboxFunctions, collect)(Textbox);