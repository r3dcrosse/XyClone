import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import WebsitesBoxContainer from './DashboardComponents/WebsitesBoxContainer';
import { Link } from 'react-router';
import LogoutButtonContainer from './DashboardComponents/LogoutButtonContainer'
import { storage } from '../../cache/ComponentCache'
require("../../Basic.less");


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      userId: null
    }
  }

  componentDidMount() {
    axios.post('/saveUser', {userId: this.props.loginStatus.authResponse.userID})
      .then((userData) => {
        let allProjects = []
        let allComponents = [];
        if (Object.keys(userData.data).length !== 0) {
          userData.data.forEach(function(project) {
            console.log(project, 'THIS IS PROJECT FROM LOGIN SCREEN');
            allProjects.push({
              projectId: project.projectId,
              title: project.title,
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
          });
          // weed out ALL component references
          // weed out ALL storage elements
          // weed out projects.
          // call this.props.updateStorageComponents(storage, components)
          this.props.updateStorageComponents(allComponents);
          this.props.updateProjectsStorage(allProjects);
          // call this.props.(make youro wn dispatch) for new projects)
          this.setState({
            projects: allProjects,
            userId: this.props.loginStatus.authResponse.userID
          });
        }
    })
    // axios.post('/saveUser', {userId: this.props.loginStatus.authResponse.userID})
    //   .then((userData) => {
    //     let allProjects = []
    //     let allComponents = [];
    //     if (Object.keys(userData.data).length !== 0) {
    //       const sessionProject = JSON.parse(sessionStorage.getItem('projectStates')).length !== 0 ? JSON.parse(sessionStorage.getItem('projectStates'))[JSON.parse(sessionStorage.getItem('counter'))] : {};

    //       userData.data.forEach(function(project) {
    //         // IF PROJECT.ID !== PROJECTTOCHANGE.ID
    //         if (sessionProject.projectId !== project.projectId) {
    //           console.log(project, 'THIS IS PROJECT FROM LOGIN SCREEN');
    //           allProjects.push({
    //             projectId: project.projectId,
    //             title: project.title,
    //             description: project.description
    //           })
    //           for (let i = 0; i < project.components.length; i++) {
    //             allComponents.push(project.components[i])
    //           }

    //           for (let key in project.storage) {
    //             storage[key] = project.storage[key];
    //             if ((!storage[key].parent) && key !== ('body' + project.projectId)) {
    //               storage[key].parent = {};
    //             }
    //           }
    //         } else {
    //           allProjects.push({
    //             projectId: sessionProject.projectId,
    //             title: sessionProject.title,
    //             description: sessionProject.description
    //           })
    //           for (let i = 0; i < sessionProject.components.length; i++) {
    //             allComponents.push(sessionProject.components[i])
    //           }

    //           for (let key in sessionProject.storage) {
    //             storage[key] = sessionProject.storage[key];
    //             if ((!storage[key].parent) && key !== ('body' + sessionProject.projectId)) {
    //               storage[key].parent = {};
    //             }
    //           }
    //         }
    //         // ELSE
    //           // GET DATA FROM PROJECTTOCHANGE
    //       });
    //       // weed out ALL component references
    //       // weed out ALL storage elements
    //       // weed out projects.
    //       // call this.props.updateStorageComponents(storage, components)

    //                         this.props.updateStorageComponents(allComponents);
            // PUSH INTO COMPONENTREFERENCES
    //       this.props.updateProjectsStorage(allProjects);
    //       // call this.props.(make youro wn dispatch) for new projects)
    //       this.setState({
    //         projects: allProjects,
    //         userId: this.props.loginStatus.authResponse.userID
    //       });
    //     }
    // })
    // this.setState({ projects: this.props.projects });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ projects: newProps.projects });
  }

  addNewProject() {
    // console.log('THIS IS SUPPOSED TO ADD A NEW PROJECT');
    axios.post('/addNewProject', {userId: this.props.loginStatus.id})
      .then((response) => {
        // console.log(response.data, 'THIS IS THE RESPONSE AFTER ADDING A NEW PROJECT');
        this.props.addNewProject(
          response.data.title,
          response.data.description,
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

  deleteProjectById(userId, projectId) {
    // Send post request with userId and projectId to delete project in DB
    axios.post('/deleteProject', {
      userId: userId,
      projectId: projectId
    });
  }

  render() {
    // console.log('THIS IS THE PROJECTS THAT ARE CURRENTLY INSIDE REDUX INSIDE DASHBOARD', this.state.projects)
    let userId = this.state.userId;

    return (
      <div className="App">
        <AppBar
          title="XyClone | Dashboard"
          className='AppBar-EditorPage'
          iconElementRight={ <LogoutButtonContainer /> }
        />

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
          <span>
            <RaisedButton
              label="+"
              onClick={ this.addNewProject.bind(this) }
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Dashboard;
