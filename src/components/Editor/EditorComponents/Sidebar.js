import React, { Component } from 'react';
import BuildSiteContainer from './Containers/BuildSiteContainer'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';



const Sidebar = ({ onSidebarClick, openState, currProject }) => (
    <Drawer open={!openState} containerStyle={{'marginTop': '2%', 'width': '15%'}}>
      <MenuItem onTouchTap={() => onSidebarClick('Navbar', currProject)}> Add Navbar</MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Textbox', currProject)}> Add Textbox </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Image', currProject)}> Add Image </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('UserContainer', currProject)}> Add Container </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Carousel', currProject)}> Add Carousel </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('GalleryPost', currProject)}> Add Gallery Post </MenuItem>
      <Divider />
      <BuildSiteContainer />
    </Drawer>

)

export default Sidebar;
