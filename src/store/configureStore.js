import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import storage from 'redux-persist/es/storage';
import reducers from './reducers';
import { logger, checkJobNumber } from './middleware';

export const persistor = (store) => persistStore(
  store,
  null,
  () => { store.getState(); },
);

export default function configureStore(history, initialState) {
  const middleware = [
    thunk,
    routerMiddleware(history),
    logger,
    checkJobNumber
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const config = {
    key: 'root',
    storage,
    blacklist: ['status','app'],
  };

  const rootReducer = persistCombineReducers( config, reducers );

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
  
  return { persistor: persistor(store), store };
}