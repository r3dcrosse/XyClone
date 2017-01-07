import React, { Component } from 'react';

const Sidebar = ({ onSidebarClick }) => (
  <div>
    <button onClick={() => onSidebarClick('Navbar')}> Add Navbar</button>
    <button onClick={() => onSidebarClick('Textbox')}> Add Textbox </button>
    <button onClick={() => onSidebarClick('Image')}> Add Image </button>
    <button onClick={() => onSidebarClick('UserContainer')}> Add Container </button>
    <button onClick={() => onSidebarClick('Carousel')}> Add Carousel </button>
    <button onClick={() => onSidebarClick('GalleryPost')}> Add Gallery Post </button>
  </div>
)

export default Sidebar;