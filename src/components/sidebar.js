import React, { Component } from 'react';
import Navbar from '../userComponents/navbar'

const Sidebar = ({ onComponentClick }) => (
  <div className='Sidebar' style={{"float":"left"}}>
    <div id='sidebarContainer'>
      <div onClick={() => onComponentClick('Navbar')}> CLICK ME FOR NAVBAR </div>
      <div onClick={() => onComponentClick('Textbox')}> CLICK ME FOR TEXTBOX </div>
    </div>
  </div>
)

export default Sidebar;