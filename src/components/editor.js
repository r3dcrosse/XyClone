import React, { Component } from 'react';
import { PropTypes } from 'react';
import UserComponent from './UserComponent'
require("../basic.less");

const Editor = ({ components, onComponentClick }) => (
  <ul>
    {components.map(component => 
      <UserComponent
        key={component.componentId}
        componentId={component.componentId} 
        onClick={() => onComponentClick(component.componentId)}
      />
    )}
  </ul>
)

Editor.propTypes = {
  components: PropTypes.arrayOf(PropTypes.shape({
    componentId: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onComponentClick: PropTypes.func.isRequired

import Sidebar from './sidebar'
import EditorView from './editorView'
require("../basic.less");

class Editor extends Component {
  render() {
    return (
      <div className="App">
        <div> yep im editor </div>
        <div>
          <Sidebar />
          <EditorView />
        </div>
      </div>
    );
  }
}


// class Editor extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div> yep im editor </div>
//       </div>
//     );
//   }
// }

export default Editor;
