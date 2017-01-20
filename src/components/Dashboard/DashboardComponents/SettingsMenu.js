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
      title: '',
      imgUrl: '',
      description: ''
    };
  };

  componentDidMount () {
    this.setState({
      title: this.props.project.title,
      imgUrl: this.props.project.imgUrl,
      description: this.props.project.description
    })
  }

  // componentWillReceiveProps (newProps) {
  //   console.log('I RECEIVED NEW PROPS DOE');
  //   let context = this;
  //   let project = newProps.projects.filter((item) => {return item.projectId === context.props.project.projectId});
  //   this.setState({
  //     title: project[0].title,
  //     imgUrl: project[0].imgUrl,
  //     description: project[0].description
  //   })
  // }

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

  handleChangeProperties (propertyToSet, propToChange, val) {
    // console.log(propertyToSet, 'PROPERTYTOSET');
    // console.log(propToChange, 'PROPERTYTOCHANGE');
    // console.log(val, 'VAL');
    this.setState({
      [propertyToSet]: val
    })
  }

  handleSubmit () {
    this.setState({
      openDiag: false
    })
    let context = this;
    let projectSelected = this.props.project.projectId;

    let title = this.state.title;
    let description = this.state.description;
    let imgUrl = this.state.imgUrl;

    this.props.updateOneProject(this.props.project.projectId, title, description, imgUrl);

    axios.post('/updateProjectSummary', {projectId: projectSelected, title: title , description: description, imgUrl: imgUrl})
      .then((response) => {
        let parsed = JSON.parse(response.config.data);
        console.log(parsed);
        context.setState({
          projectId: parsed.projectId,
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
    let { title, description, imgUrl } = this.state
    console.log(title, description, imgUrl);
    return (
      <span>
        <RaisedButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label="Settings"
        />
        <span>
          <Dialog
            title="Edit Project"
            actions={actions}
            modal={false}
            open={this.state.openDiag}
            onRequestClose={this.handleClose.bind(this)}
          >
            <TextField
              id='title'
              onChange={this.handleChangeProperties.bind(this, 'title')}
              value={title}
              hintText="Update Project Title"
              floatingLabelText="Project Title"
            /><br />
            <TextField
              id='description'
              onChange={this.handleChangeProperties.bind(this, 'description')}
              value={description}
              hintText="Update Project Description"
              floatingLabelText="Project Description"
            /><br />
            <TextField
              id='imgUrl'
              onChange={this.handleChangeProperties.bind(this, 'imgUrl')}
              value={imgUrl}
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
