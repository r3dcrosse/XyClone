import React from 'react';
import SettingsMenu from './SettingsMenu.js';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardTitle, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const WebsitesBox = ({ project, changeCurrProject }) => {
  let enterEditor = () => {
    // send dispatch action to redux to change the current project
    changeCurrProject(project.projectId);
    browserHistory.push('/editor')
  }
  return (
    <Card>
      <CardMedia style={{
        paddingTop: '5px',
        paddingLeft: '5px',
        paddingRight: '5px'
      }}>
        <img src="http://placecorgi.com/280/160" />
      </CardMedia>
      <CardTitle title={project.name} subtitle={project.description} />
      <CardActions>
        <RaisedButton label="Edit Site" onClick={enterEditor} primary={true} />
        <SettingsMenu />
      </CardActions>
    </Card>
  )
};

export default WebsitesBox;
