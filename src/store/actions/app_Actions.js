import actionTypes from './actionTypes';
import { firebase } from '../../firebase';
import api from '../../helpers/api';

export async function initApp(dispatch) {
  try {
    dispatch({ type: actionTypes.updateStatus, loading: true });

    firebase.auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const idToken = await authUser.getIdToken(true);
        const data = await api.post('auth/authenticate', null, idToken);

        if (!data.success) {
          throw data.message;
        }

        console.log(data);

        const { userInfo, token } = data.results;

        dispatch({ type: actionTypes.initApplication, userInfo, token });
        dispatch({ type: actionTypes.updateStatus, loading: false });
      } else {
        dispatch({ type: actionTypes.initApplication, userInfo: null, token: null });
        dispatch({ type: actionTypes.updateStatus, loading: false });
      }
    });
  } catch (error) {
    dispatch({ type: actionTypes.updateStatus, error, loading: false });
  }
}

export async function createUser(userInfo, dispatch) {
  try {
    dispatch({ type: actionTypes.updateStatus, loading: true });

    const data = await api.post('users/', { user: userInfo }, null);

    if (!data.succcess) {
      throw data.message;
    }

    dispatch({ type: actionTypes.initApplication, userInfo: data.results });
    dispatch({ type: actionTypes.updateStatus, loading: false });
  } catch (error) {
    dispatch({ type: actionTypes.updateStatus, error, loading: false });
  }
}

export function checkDeviceInfo(dispatch) {
  let isDesktop = true;
  let isMobile = false;
  let isTablet = false;

  // eslint-disable-next-line
  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isDesktop = false;
    isTablet = false;
    isMobile = true;

    dispatch({
      type: actionTypes.checkDeviceType, isDesktop, isTablet, isMobile
    });

    return;
  }
  // eslint-disable-next-line
  if (navigator.userAgent.match(/iPad/i) !== null) {
    isDesktop = false;
    isTablet = true;
    isMobile = false;
    dispatch({
      type: actionTypes.checkDeviceType, isDesktop, isTablet, isMobile
    });
    return;
  }
  dispatch({
    type: actionTypes.checkDeviceType, isDesktop, isTablet, isMobile
  });
}

export const actionCreators = {
  initApp: () => async (dispatch, getState) => {
    await initApp(dispatch, getState);
  },
  createUser: userInfo => async (dispatch, getState) => {
    await createUser(userInfo, dispatch, getState);
  },
  checkDeviceInfo: () => (dispatch, getState) => {
    checkDeviceInfo(dispatch, getState);
  },
};
