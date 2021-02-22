import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'data';
import { history } from 'data/router';
import Routes from 'routes';

import './styles.css';
import * as serviceWorker from 'serviceWorker';

const root = document.getElementById('root');

const AppContainer = (): ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<AppContainer />, root);
serviceWorker.unregister();
