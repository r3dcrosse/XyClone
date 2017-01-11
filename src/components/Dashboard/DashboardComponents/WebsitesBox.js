import React from 'react';
import SettingsMenu from './SettingsMenu.js';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardTitle, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const WebsitesBox = () => {
  let enterEditor = () => {
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
      <CardTitle title="My Cool Doge Site" subtitle="It's all about doge" />
      <CardActions>
        <RaisedButton label="Edit Site" onClick={enterEditor} primary={true} />
        <SettingsMenu />
      </CardActions>
    </Card>
  )
};

export default WebsitesBox;
