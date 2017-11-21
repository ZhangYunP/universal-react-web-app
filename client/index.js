import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './redux/configureStore';
import App from './containers';
// import registerServiceWorker from './registerServiceWorker';

const env = process.env.NODE_ENV || 'development';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

const root = document.getElementById('root');

const renderComponent = App => {
  if (env === 'development') {
    hydrate(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      root
    );
  } else {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    );
  }
};

renderComponent(App);

if (module.hot && env === 'development') {
  module.hot.accept('./containers', () => {
    renderComponent(App);
  });
}

// registerServiceWorker();
