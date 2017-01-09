
import React from 'react';
import { render } from 'react-dom';
import { Router, DefaultRoute, Link, Route, hashHistory } from 'react-router';

const IndexComponent = require('./components/IndexComponent.js');

class IndexPage extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <IndexComponent />
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
