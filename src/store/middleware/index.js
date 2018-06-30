import sentry from '../../helpers/sentry';
import { firebase } from '../../firebase';
import api from '../../helpers/api';
import actionTypes from '../actions/actionTypes';
import { checkDeviceInfo } from '../actions/app_Actions';

export const getUserInfo = store => next => (action) => {
  if (action.type === 'persist/REHYDRATE') {
    checkDeviceInfo(store.dispatch);
    try {
      firebase.auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          const idToken = await authUser.getIdToken(true);
          const data = await api.post('auth/authenticate', null, idToken);

          if (!data.success) {
            throw data.message;
          }

          const { userInfo, token } = data.results;

          store.dispatch({ type: actionTypes.initApplication, userInfo, token });
        } else {
          store.dispatch({ type: actionTypes.initApplication, userInfo: null, token: null });
        }
      });
    } catch (error) {
      store.dispatch({ type: actionTypes.updateStatus, error });
    }
  }
  return next(action);
};

export const logger = store => next => (action) => {
  // if (!action.type) throw action;

  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export const crashReporter = store => next => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    sentry.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });
    return next(action);
  }
};
