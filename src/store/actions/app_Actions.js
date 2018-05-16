import { actionTypes } from './actionTypes';
import { auth, firebase } from '../../firebase';

export async function initApp(dispatch, getState){
  try {
    dispatch({ type: actionTypes.updateStatus, loading: true });
    
    const userInfo = await firebase.auth.onAuthStateChanged();

    dispatch({ type: actionTypes.initApplication, userInfo });
    dispatch({ type: actionTypes.updateStatus, loading: false });
  } catch(error) {
    dispatch({ type: actionTypes.updateStatus, error, loading: false });
  }  
}

