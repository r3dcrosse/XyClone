import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';

import EditorContainer from '../containers/EditorContainer';
import SidebarContainer from '../containers/SidebarContainer';
require("../basic.less");

const EditorPage = () => (
  <div>
    <div className='side-bar'>
      <button><Link to='/dashboard'> Back to Dashboard </Link></button>
      <SidebarContainer />
    </div>
      <EditorContainer />
  </div>

)



export default EditorPage;

