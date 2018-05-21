import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/index';

import Loading from './components/Loading';

import './App.css';

const { persistor, store } = configureStore();

const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
)

ReactDOM.render(<Root />, rootElement );

registerServiceWorker();
