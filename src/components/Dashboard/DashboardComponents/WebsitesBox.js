import React from 'react';

import {Card, CardActions, CardTitle, CardMedia} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const WebsitesBox = () => (
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
      <RaisedButton label="Edit Site" href="/Editor" />
    </CardActions>
  </Card>
);

export default WebsitesBox;
