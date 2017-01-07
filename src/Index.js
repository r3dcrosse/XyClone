import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/ConfigureStore';
import Root from './components/AppRoot/Root';

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
  module.hot.accept('./components/AppRoot/Root', () => {
    const RootContainer = require('./components/AppRoot/Root').default;
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
