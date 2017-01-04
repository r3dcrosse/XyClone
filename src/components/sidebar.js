import React, { Component } from 'react';
import Navbar from '../userComponents/navbar'

const Sidebar = ({ onSidebarClick }) => (
  <div>
    <button onClick={() => onSidebarClick('Navbar')}> Add Navbar</button>
    <button onClick={() => onSidebarClick('Textbox')}> Add Textbox </button>
    <button onClick={() => onSidebarClick('Image')}> Add Image </button>
  </div>
)

export default Sidebar;