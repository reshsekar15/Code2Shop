import { sentry } from '../../helpers/sentry';
import { firebase } from '../../firebase';
import { db } from '../../firebase';
import { actionTypes } from '../actions/actionTypes';

export const getUserInfo = store => next => action => {
  console.log(action);
  if(action.type === "persist/REHYDRATE"){
    firebase.auth.onAuthStateChanged(authUser => {
      db.users.onceGetCurrentUser(authUser.uid).then(user => {
        console.log(user.val());
        store.dispatch({type: actionTypes.initApplication, userInfo: user.val()});
      })      
    });
    //initApp(store.dispatch, store.getState).then();
  }

  next(action);
}

export const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
export const crashReporter = store => next => action => {
  
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    sentry.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
    next(action);
  }
}