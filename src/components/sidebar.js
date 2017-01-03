import React, { Component } from 'react';
import Navbar from '../userComponents/navbar'

const Sidebar = ({ onSidebarClick }) => (
  <div>
    <div onClick={() => onSidebarClick('Navbar')}> CLICK ME FOR NAVBAR </div>
    <div onClick={() => onSidebarClick('Textbox')}> CLICK ME FOR TEXTBOX </div>
  </div>
)

export default Sidebar;