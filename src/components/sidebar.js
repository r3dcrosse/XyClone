import React, { Component } from 'react';
import Navbar from '../userComponents/Navbar'

const Sidebar = ({ onSidebarClick }) => (
  <div>
    <button onClick={() => onSidebarClick('Navbar')}> Add Navbar</button>
    <button onClick={() => onSidebarClick('Textbox')}> Add Textbox </button>
    <button onClick={() => onSidebarClick('Image')}> Add Image </button>
    <button onClick={() => onSidebarClick('UserContainer')}> Add Container </button>
  </div>
)

export default Sidebar;