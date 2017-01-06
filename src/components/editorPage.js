import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';

import EditorContainer from '../containers/EditorContainer';
import SidebarContainer from '../containers/SidebarContainer';
import BuildSiteContainer from '../containers/buildSiteContainer'
import EditorComponentContainer from '../containers/editorComponentContainer';
require("../basic.less");

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
      <EditorComponentContainer />
    </div>
  </div>

)



export default EditorPage;


