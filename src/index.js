import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter as Router } from 'react-router-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import 'semantic-ui-css/semantic.css';

import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/index';

import Loading from './components/Loading';

import './styles/App.css';
// import './styles/semantic.css';

const { persistor, store } = configureStore();

// eslint-disable-next-line
const rootElement = document.getElementById('root');

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, rootElement);

registerServiceWorker();
