import actionTypes from './actionTypes';
import { firebase } from '../../firebase';

export async function initApp(dispatch) {
  try {
    dispatch({ type: actionTypes.updateStatus, loading: true });

    console.log('here');

    const userInfo = await firebase.auth.onAuthStateChanged();

    dispatch({ type: actionTypes.initApplication, userInfo });
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
  checkDeviceInfo: () => (dispatch, getState) => {
    checkDeviceInfo(dispatch, getState);
  },
};
