import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';

import EditorContainer from '../../containers/clientEditorContainers/EditorContainer';
import SidebarContainer from '../../containers/clientEditorContainers/SidebarContainer';
import BuildSiteContainer from '../../containers/clientEditorContainers/BuildSiteContainer'
import ContextContainer from '../../containers/clientEditorContainers/ContextContainer';
require("../../Basic.less");

const EditorPage = () => (
  <div className='editor-container'>
    <div className='side-bar'>
      <button><Link to='/dashboard'> Back to Dashboard </Link></button>
      <SidebarContainer />
      <BuildSiteContainer />
    </div>
    <div className='editor-inPage'>
      <EditorContainer />
    </div>
    <div className='editor-component'>
      <ContextContainer />
    </div>
  </div>

)



export default EditorPage;


