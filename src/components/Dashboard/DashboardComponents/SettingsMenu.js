import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      currProjectId: null
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

  handleEditProject () {
    let projectSelected = this.props.project.projectId;

    axios.post('/updateProject')
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
    return (
      <span>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Settings"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Edit Project" onClick={this.handleEditProject}/>
            <MenuItem primaryText="Delete website" onClick={this.handleDeleteProject}/>
          </Menu>
        </Popover>
      </span>
    );
  }
};
