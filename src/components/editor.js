import React, { Component } from 'react';
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

export default Editor;
