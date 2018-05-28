import sentry from '../../helpers/sentry';
import { firebase, db } from '../../firebase';
import actionTypes from '../actions/actionTypes';
import { checkDeviceInfo } from '../actions/app_Actions';

export const getUserInfo = store => next => (action) => {
  if (action.type === 'persist/REHYDRATE') {
    checkDeviceInfo(store.dispatch);
    firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.users.onceGetCurrentUser(authUser.uid).then((user) => {
          store.dispatch({ type: actionTypes.initApplication, userInfo: user.val() });
        });
      } else {
        store.dispatch({ type: actionTypes.initApplication, userInfo: null });
      }
    });
  }
  return next(action);
};

export const logger = store => next => (action) => {
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
