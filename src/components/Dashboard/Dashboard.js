import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import WebsitesBoxContainer from './DashboardComponents/WebsitesBoxContainer';
import { Link } from 'react-router';
import LogoutButtonContainer from './DashboardComponents/LogoutButtonContainer'
import { storage } from '../../cache/ComponentCache';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
require("../../Basic.less");


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      userId: null,
      open: false,
      title: '',
      description: '',
      imgUrl: ''
    }
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  componentDidMount() {
    axios.post('/saveUser', {userId: this.props.loginStatus.authResponse.userID})
      .then((userData) => {
        let allProjects = []
        let allComponents = [];
        if (Object.keys(userData.data).length !== 0) {
          const sessionProject = JSON.parse(sessionStorage.getItem('projectStates')).length !== 0 ? JSON.parse(sessionStorage.getItem('projectStates')) [JSON.parse(sessionStorage.getItem('counter'))] : {};

          userData.data.forEach(function(project) {
            // IF PROJECT.ID !== PROJECTTOCHANGE.ID
            if (sessionProject.projectId !== project.projectId) {
              console.log(project, 'THIS IS PROJECT FROM LOGIN SCREEN');
              allProjects.push({
                projectId: project.projectId,
                title: project.title,
                imgUrl: project.imgUrl,
                description: project.description
              })
              for (let i = 0; i < project.components.length; i++) {
                allComponents.push(project.components[i])
              }


              for (let key in project.storage) {
                storage[key] = project.storage[key];
                if ((!storage[key].parent) && key !== ('body' + project.projectId)) {
                  storage[key].parent = {};
                }
              }
            } else {
              allProjects.push({
                projectId: sessionProject.projectId,
                title: sessionProject.title,
                imgUrl: sessionProject.imgUrl,
                description: sessionProject.description
              })
              for (let i = 0; i < sessionProject.components.length; i++) {
                allComponents.push(sessionProject.components[i])
              }
              for (let key in sessionProject.storage) {
                storage[key] = sessionProject.storage[key];
                if ((!storage[key].parent) && key !== ('body' + sessionProject.projectId)) {
                  storage[key].parent = {};
                }
              }
            }
          });
          this.props.updateStorageComponents(allComponents);
          this.props.updateProjectsStorage(allProjects);
          this.setState({
            projects: allProjects,
            userId: this.props.loginStatus.authResponse.userID
          });
        }
    })
    this.setState({ projects: this.props.projects });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      projects: newProps.projects,
      open: false,
    });
  }

  addNewProject() {
    // console.log('THIS IS SUPPOSED TO ADD A NEW PROJECT');
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let imgUrl = document.getElementById('imgUrl').value;
    if (imgUrl === '') {
      imgUrl = 'http://entertainment.inquirer.net/files/2016/07/13717225_1265259390150735_8093269019210020606_o.jpg';
    }
    axios.post('/addNewProject', {userId: this.props.loginStatus.id, title: title, description: description, imgUrl: imgUrl})
      .then((response) => {

        // console.log(response.data, 'THIS IS THE RESPONSE AFTER ADDING A NEW PROJECT');
        this.props.addNewProject(
          response.data.title,
          response.data.description,
          response.data.imgUrl,
          response.data.projectId
        );
        // this.props.addNewProject('Default Project ' + response.data.newSequenceNumber, '2 doge for u', 1337);
        storage['body' + response.data.projectId] = {
          css: {
            display: 'inline-flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            backgroundColor: '#000000',
            marginLeft: '180px',
            padding: '0px',
            width: '70%',
            height: '100%',
          }
        }
      });
  }

  // handleTextFieldChange(e) {
  //   this.setState({
  //       textFieldValue: e.target.value
  //   });
  // }

  deleteProjectById(userId, projectId) {
    // Send post request with userId and projectId to delete project in DB
    axios.post('/deleteProject', {
      userId: userId,
      projectId: projectId
    });
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={ this.addNewProject.bind(this) }
      />,
    ];
    // console.log('THIS IS THE PROJECTS THAT ARE CURRENTLY INSIDE REDUX INSIDE DASHBOARD', this.state.projects)
    let userId = this.state.userId;
    console.log(this.state.projects);
    return (
      <div>
        <div className="App">
          <AppBar
            title="XyClone | Dashboard"
            className='AppBar-EditorPage'
            iconElementRight={ <LogoutButtonContainer /> }
            showMenuIconButton={false}

          />
        </div>

        <div style={{margin:'100px'}}>

        </div>

        <div className='dashboard-AddProjectButton'>
          <RaisedButton
              label="+ Add New Project"
              onTouchTap={this.handleOpen.bind(this)}
            />
        </div>

          <div className="websitesBox-container">
            {
              this.state.projects.map((project, key) => {
                return (
                  <WebsitesBoxContainer
                    key={ key }
                    project={ project }
                    handleDeleteProject={ this.deleteProjectById }
                    userId={ userId }
                  />
                )
              })
            }
          </div>

        <span>
          <Dialog
            title="Create New Project"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose.bind(this)}
          >
            <TextField
              id='title'
              hintText="Project Title"
              floatingLabelText="Project Title"
            /><br />
            <TextField
              id='description'
              hintText="Project Description"
              floatingLabelText="Project Description"
            /><br />
            <TextField
              id='imgUrl'
              hintText="Project Image URL"
              floatingLabelText="Project Image URL"
            /><br />
          </Dialog>
        </span>

      </div>
    );
  }
}

export default Dashboard;
