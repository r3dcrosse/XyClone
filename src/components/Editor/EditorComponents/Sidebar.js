import React, { Component } from 'react';
import saveToSessionStorage from '../../../cache/StorageCache';
import { storage } from '../../../cache/ComponentCache';
import BuildSiteContainer from './Containers/BuildSiteContainer';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Redo from 'material-ui/svg-icons/content/redo';
import Undo from 'material-ui/svg-icons/content/undo';
import FlatButton from 'material-ui/FlatButton';
import {blue500, red500, greenA200, black} from 'material-ui/styles/colors';



class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      components: null
    }
  }

  componentDidMount() {
    if (JSON.parse(sessionStorage.getItem('projectStates')).length === 0) {
      saveToSessionStorage(this.props.components, this.props.currProject, this.props.loginStatus.id, this.props.pages);
    }
  }

  clickHandler (type, currProject, id, currPage) {
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onSidebarClick(type, currProject, id, currPage);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id, context.props.pages);
    })
  }

  undo () {
    let counter = JSON.parse(sessionStorage.getItem('counter'));
    if (counter === 0) {
      return;
    }
    if (counter > 0) {
      counter--;
    }
    let prevProjectState = JSON.parse(sessionStorage.getItem('projectStates'))[counter];
    sessionStorage.setItem('counter', JSON.stringify(counter));
    // CHANGE STORAGE CACHE TO REFLECT THE RPOEJCT STATE;
    // DELETING ALL PREVIOUS STORAGE COMPONENTS.
    for (let key in storage) {
      if (key.includes('body')) {
        if (key === 'body' + this.props.currProject.projectId) {
          console.log('DELETING THIS', storage[key]);
          delete storage[key];
        }
      } else {
        if (storage[key].project.projectId === this.props.currProject.projectId) {
          console.log('DELETING TIHS NOT BHODY', storage[key])
          console.log('STORAGE IS CURRNELTY', storage);
          delete storage[key];
          console.log('STORAGE IS THIS AFTER', storage);
        }
      }
    }
    // ADDING IN ALL COMPONENTS FROM PREVIOUS STATE.
    for (let key in prevProjectState.storage) {
      storage[key] = prevProjectState.storage[key];
    }

    this.props.updateStorageAndStateComponents(prevProjectState.components)
  }

  redo () {
    let counter = JSON.parse(sessionStorage.getItem('counter'));
    let projectStates = JSON.parse(sessionStorage.getItem('projectStates'));
    if (counter === projectStates.length - 1) {
      return;
    }
    if (projectStates.length - 1 > counter) {
      counter++;
    }
    let nextProjectState = JSON.parse(sessionStorage.getItem('projectStates'))[counter];
    sessionStorage.setItem('counter', JSON.stringify(counter));
    // CHANGE STORAGE CACHE TO REFLECT THE RPOEJCT STATE;
    console.log(storage, 'STORAGE BEFORE CHANGE')
    console.log(nextProjectState, 'PREVIOSU PROJECT STATE');
    // DELETING ALL PREVIOUS STORAGE COMPONENTS.
    for (let key in storage) {
      if (key.includes('body')) {
        if (key === 'body' + this.props.currProject.projectId) {
          console.log('DELETING THIS', storage[key]);
          delete storage[key];
        }
      } else {
        if (storage[key].project.projectId === this.props.currProject.projectId) {
          console.log('DELETING TIHS NOT BHODY', storage[key])
          delete storage[key]
        }
      }
    }
    // ADDING IN ALL COMPONENTS FROM PREVIOUS STATE.
    for (let key in nextProjectState.storage) {
      storage[key] = nextProjectState.storage[key];
    }
    console.log(storage, 'STORAGE AFTER CHANGE');

    this.props.updateStorageAndStateComponents(nextProjectState.components)
  }

  render() {
    let { openState, currProject, loginStatus, onSidebarClick, undo, redo, currPage } = this.props;
    return (
      <Drawer open={!openState} containerStyle={{'marginTop': '70px', 'width': '15%'}}>
        <MenuItem onTouchTap={() => this.clickHandler('Navbar', currProject, loginStatus.id, currPage)}> Add Navbar</MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Textbox', currProject, loginStatus.id, currPage)}> Add Textbox </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Image', currProject, loginStatus.id, currPage)}> Add Image </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('UserContainer', currProject, loginStatus.id, currPage)}> Add Container </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Carousel', currProject, loginStatus.id, currPage)}> Add Carousel </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('GalleryPost', currProject, loginStatus.id, currPage)}> Add Gallery Post </MenuItem>
        <div>
          <div>
            <FlatButton
              onTouchTap={() => this.undo()}
              hoverColor={greenA200}
              icon={<Undo />}
            />
            <FlatButton
              onTouchTap={() => this.redo()}
              hoverColor={greenA200}
              icon={<Redo />}
            />
          </div>
        </div>
        <p></p>
        <Divider />
        <BuildSiteContainer />
      </Drawer>
    )
  }
}

export default Sidebar;
