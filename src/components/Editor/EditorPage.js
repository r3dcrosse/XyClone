import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';

import EditorContainer from './EditorComponents/Containers/EditorContainer';
import SidebarContainer from './EditorComponents/Containers/SidebarContainer';
import BuildSiteContainer from './EditorComponents/Containers/BuildSiteContainer'
import ContextContainer from './EditorComponents/Containers/ContextContainer';
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


