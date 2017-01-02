import React, { Component } from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div id='sidebarContainer'>
          <Textbox />
          <Navbar />
        </div>
      </div>
    )
  }
}

export default Sidebar;