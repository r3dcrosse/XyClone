import React, { Component } from 'react';
import BuildSiteContainer from './Containers/BuildSiteContainer'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Redo from 'material-ui/svg-icons/content/redo';
import Undo from 'material-ui/svg-icons/content/undo';
import FlatButton from 'material-ui/FlatButton';
import {blue500, red500, greenA200, black} from 'material-ui/styles/colors';



const Sidebar = ({ onSidebarClick, openState, currProject, loginStatus }) => (
    <Drawer open={!openState} containerStyle={{'marginTop': '2%', 'width': '15%'}}>
      <MenuItem onTouchTap={() => onSidebarClick('Navbar', currProject, loginStatus.id)}> Add Navbar</MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Textbox', currProject, loginStatus.id)}> Add Textbox </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Image', currProject, loginStatus.id)}> Add Image </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('UserContainer', currProject, loginStatus.id)}> Add Container </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('Carousel', currProject, loginStatus.id)}> Add Carousel </MenuItem>
      <MenuItem onTouchTap={() => onSidebarClick('GalleryPost', currProject, loginStatus.id)}> Add Gallery Post </MenuItem>
      <div>
        <div>
          <FlatButton
            onTouchTap={() => onSidebarClick('', currProject, loginStatus.id)}
            hoverColor={greenA200}
            tooltip="UNDO"
            icon={<Undo />}
          />
          <FlatButton
            onTouchTap={() => onSidebarClick('', currProject, loginStatus.id)}
            hoverColor={greenA200}
            tooltip="REDO"
            icon={<Redo />}
          />
        </div>
      </div>
      <p></p>
      <Divider />
      <BuildSiteContainer />
    </Drawer>

)

export default Sidebar;
