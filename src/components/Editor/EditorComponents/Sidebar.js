import React, { Component } from 'react';
import BuildSiteContainer from './Containers/BuildSiteContainer'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';



const Sidebar = ({ onSidebarClick, openState, currProject, loginStatus }) => (
    <Drawer open={!openState} containerStyle={{'marginTop': '2%', 'width': '15%'}}>
      <MenuItem onTouchTap={() => onSidebarClick('Navbar', currProject, loginStatus.id)}> Add Navbar</MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Textbox', currProject, loginStatus.id)}> Add Textbox </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Image', currProject, loginStatus.id)}> Add Image </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('UserContainer', currProject, loginStatus.id)}> Add Container </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Carousel', currProject, loginStatus.id)}> Add Carousel </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('GalleryPost', currProject, loginStatus.id)}> Add Gallery Post </MenuItem>
      <Divider />
      <BuildSiteContainer />
        <div>
          <FontIcon
            className="material-icons"
            style={iconStyles}
            color={red500}
            hoverColor={greenA200}
          >undo</FontIcon> <FontIcon
            className="material-icons"
            style={iconStyles}
            color={red500}
            hoverColor={greenA200}
          >redo</FontIcon>
        </div>
    </Drawer>

)

export default Sidebar;
