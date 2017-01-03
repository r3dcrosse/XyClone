import React, { Component } from 'react';
import { PropTypes } from 'react';
import EditorContainer from '../containers/EditorContainer';
import SidebarContainer from '../containers/SidebarContainer';
require("../basic.less");

const EditorPage = () => (
  <div>
    <SidebarContainer />
    <EditorContainer />
  </div>

)



export default EditorPage;

