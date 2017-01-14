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
    this.setState({
      projects: this.props.projects,
      userId: this.props.loginStatus.id
    });
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
