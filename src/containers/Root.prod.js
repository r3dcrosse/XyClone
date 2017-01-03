import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory} >
          <Route path='/' component={App} >
            <IndexRoute component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/editor' component={EditorPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
