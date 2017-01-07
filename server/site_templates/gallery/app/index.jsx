import React from 'react';
import { render } from 'react-dom';
import { Router, DefaultRoute, Link, Route, hashHistory } from 'react-router';

// const ImageComponent = require('./ImageComponent.jsx');
const IndexComponent = require('./components/IndexComponent.js');

////////////////////////////////////////////////////////////////////////////////
// DUMMY DATA (prop tree)
var dummyData = [
  {
    type: 'image',
    src: 'http://placecorgi.com/260/180',
    alt: 'DOGE1',
    key: 'H3dz4d'
  },
  {
    type: 'text',
    text: 'DOGGGGGEEEEEEE',
    key: 'zs3d9d'
  },
  {
    type: 'image',
    src: 'http://placecorgi.com/260/180',
    alt: 'DOGE 2',
    key: 'Hd82x9'
  }];
////////////////////////////////////////////////////////////////////////////////

class IndexPage extends React.Component {
  render() {
    console.log('&&&&&&', IndexComponent);
    return (
      <div>
        <p>{dummyData[1].text}</p>
        <IndexComponent />
        {/* <ImageComponent src={dummyData[0].src} alt={dummyData[0].alt} /> */}
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={IndexPage}/>
    {/* add the routes here */}
  </Router>
), document.getElementById('react'));
