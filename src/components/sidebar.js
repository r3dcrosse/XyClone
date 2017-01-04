import React, { Component } from 'react';
import Navbar from '../userComponents/navbar'

const Sidebar = ({ onSidebarClick }) => (
  <div>
    <button onClick={() => onSidebarClick('Navbar')}> CLICK ME FOR NAVBAR </button>
    <button onClick={() => onSidebarClick('Textbox')}> CLICK ME FOR TEXTBOX </button>
  </div>
)

export default Sidebar;