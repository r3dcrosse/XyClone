import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      openDiag: false,
      currProjectId: null,
      title: this.props.project.title,
      imgUrl: this.props.project.imgUrl,
      description: this.props.project.description
    };
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClose = () => {
    this.setState({openDiag: false});
  };

  handleEditProject () {
    this.setState({
      open: false,
      openDiag: true
    });
  }

  onChange () {
    
  }

  handleSubmit () {
    this.setState({
      openDiag: false
    })
    let context = this;
    let projectSelected = this.props.project.projectId;

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let imgUrl = document.getElementById('imgUrl').value;

    axios.post('/updateProjectSummary', {projectId: projectSelected, title: title , description: description, imgUrl: imgUrl})
      .then((response) => {
        let parsed = JSON.parse(response.config.data);
        console.log(parsed);
        context.setState({
          projetId: parsed.projectId,
          title: parsed.title,
          description: parsed.description,
          imgUrl: parsed.imgUrl
        })
      })
  }

  handleDeleteProject = () => {
    let projectSelected = this.props.project.projectId;
    let userId = this.props.userId;

    // Close the settings menu
    this.handleRequestClose();

    // Calls the deletion function in Dashboard.js to delete in DB
    this.props.handleDeleteProject(userId, projectSelected);

    // Delete the project in Redux storage to rerender the screen
    this.props.deleteProjectById(projectSelected);

  };

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
        onTouchTap={this.handleSubmit.bind(this)}
      />,
    ];
    console.log(this.state.title);
    return (
      <span>
        <RaisedButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label="Settings"
        />
        <span>
          <Dialog
            title="Create New Project"
            actions={actions}
            modal={false}
            open={this.state.openDiag}
            onRequestClose={this.handleClose.bind(this)}
          >
            <TextField
              id='title'
              onChange={}
              value={this.state.title}
              hintText="Update Project Title"
              floatingLabelText="Project Title"
            /><br />
            <TextField
              id='description'
              onChange={}
              value={this.state.description}
              hintText="Update Project Description"
              floatingLabelText="Project Description"
            /><br />
            <TextField
              id='imgUrl'
              onChange={}
              value={this.state.imgUrl}
              hintText="Update Project Image"
              floatingLabelText="Project Image URL"
            /><br />
          </Dialog>
        </span>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose.bind(this)}
        >
          <Menu>
            <MenuItem primaryText="Edit Project" onClick={this.handleEditProject.bind(this)}/>
            <MenuItem primaryText="Delete website" onClick={this.handleDeleteProject.bind(this)}/>
          </Menu>
        </Popover>
      </span>
    );
  }
};
