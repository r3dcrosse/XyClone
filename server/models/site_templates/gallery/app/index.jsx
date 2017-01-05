import React from 'react';
import { render } from 'react-dom';
import { Router, DefaultRoute, Link, Route, hashHistory } from 'react-router';
import { ImageComponent } from './ImageComponent.jsx';

class IndexPage extends React.Component {
  render() {
    return (
      <p>Hello world</p>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={IndexPage}/>
    {/* add the routes here */}
  </Router>
), document.getElementById('react'));
