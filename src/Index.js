import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/ConfigureStore';
import Root from './containers/rootContainers/Root';

const store = configureStore();

// need to move routes into Root
render(
  <AppContainer>
    <Root
      store={ store }
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/rootContainers/Root', () => {
    const RootContainer = require('./containers/rootContainers/Root').default;
    render(
      <AppContainer>
        <RootContainer
          store={ store }
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
