import React, { Component } from 'react';
import BuildSiteContainer from './Containers/BuildSiteContainer'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const Sidebar = ({ onSidebarClick, openState }) => (
    <Drawer open={openState} containerStyle={{'marginTop': '2%', 'width': '15%'}}>
      <MenuItem onTouchTap={() => onSidebarClick('Navbar')}> Add Navbar</MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Textbox')}> Add Textbox </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Image')}> Add Image </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('UserContainer')}> Add Container </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Carousel')}> Add Carousel </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('GalleryPost')}> Add Gallery Post </MenuItem>
      <Divider />
      <BuildSiteContainer />
    </Drawer>

)

export default Sidebar;
