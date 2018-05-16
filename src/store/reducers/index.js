import { routerReducer } from 'react-router-redux';
import app from './app';
import status from './status';

const rehydrated = ( state = false, action ) => {
  switch ( action.type ) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  routing: routerReducer,
  rehydrated,
  app,
  status,
};