import React, { Component } from 'react';
import saveToSessionStorage from '../../../cache/StorageCache'
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



class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      components: null
    }
  }



  undo () {
  let projectStates = JSON.parse(sessionStorage.getItem('projectStates'));
  let counter = JSON.parse(sessionStorage.getItem('counter')) - 1;
  let prevProjectState = projectStates[counter];

    allProjects.push({
      projectId: prevProjectState.projectId,
      title: prevProjectState.title,
      description: prevProjectState.description
    })

    // GRAB ALL THE COMPONENT REFERENCES THE USER HAS
    for (let i = 0; i < prevProjectState.components.length; i++) {
      allComponents.push(prevProjectState.components[i])
    }

    // UPDATE STORAGE CACHE TO CORRESPOND TO THE COMPONENTS FROM THE USER
    for (let key in prevProjectState.storage) {
      storage[key] = prevProjectState.storage[key];
      if ((!storage[key].parent) && key !== ('body' + prevProjectState.projectId)) {
        storage[key].parent = {};
      }
    }
    this.props.updateStorageComponents(allComponents);
    this.props.updateProjectsStorage(allProjects);
  }

  redo () {
    let projectStates = JSON.parse(sessionStorage.getItem('projectStates'));
    let counter = JSON.parse(sessionStorage.getItem('counter')) - 1;
    let prevProjectState = projectStates[counter];

    allProjects.push({
      projectId: prevProjectState.projectId,
      title: prevProjectState.title,
      description: prevProjectState.description
    })

    // GRAB ALL THE COMPONENT REFERENCES THE USER HAS
    for (let i = 0; i < prevProjectState.components.length; i++) {
      allComponents.push(prevProjectState.components[i])
    }

    // UPDATE STORAGE CACHE TO CORRESPOND TO THE COMPONENTS FROM THE USER
    for (let key in prevProjectState.storage) {
      storage[key] = prevProjectState.storage[key];
      if ((!storage[key].parent) && key !== ('body' + prevProjectState.projectId)) {
        storage[key].parent = {};
      }
    }
  }
  // componentWillReceiveProps (newProps) {
    // saveToSessionStorage(newProps.components, newProps.currProject, newProps.loginStatus.id);
  // }
  clickHandler (type, currProject, id) {
    let context = this;
    let dispatchHandler = new Promise(function(resolve, reject) {
      context.props.onSidebarClick(type, currProject, id);
      resolve();
    })
    dispatchHandler.then(() => {
      saveToSessionStorage(context.props.components, context.props.currProject, context.props.loginStatus.id);
    })
  }

  render() {
    let { openState, currProject, loginStatus, onSidebarClick } = this.props;
    return (
      <Drawer open={!openState} containerStyle={{'marginTop': '2%', 'width': '15%'}}>
        <MenuItem onTouchTap={() => this.clickHandler('Navbar', currProject, loginStatus.id)}> Add Navbar</MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Textbox', currProject, loginStatus.id)}> Add Textbox </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Image', currProject, loginStatus.id)}> Add Image </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('UserContainer', currProject, loginStatus.id)}> Add Container </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('Carousel', currProject, loginStatus.id)}> Add Carousel </MenuItem>
        <MenuItem onTouchTap={() => this.clickHandler('GalleryPost', currProject, loginStatus.id)}> Add Gallery Post </MenuItem>
        <div>
          <div>
            <FlatButton
              onTouchTap={() => onSidebarClick('', currProject, loginStatus.id)}
              hoverColor={greenA200}
              icon={<Undo />}
            />
            <FlatButton
              onTouchTap={() => onSidebarClick('', currProject, loginStatus.id)}
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
