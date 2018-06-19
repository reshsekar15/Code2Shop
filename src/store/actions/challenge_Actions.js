import actionTypes from './actionTypes';
import { firebase } from '../../firebase';

export async function initChallengeList(dispatch) {
  try {
    dispatch({ type: actionTypes.updateStatus, loading: true });

    const userInfo = await firebase.auth.onAuthStateChanged();

    dispatch({ type: actionTypes.initApplication, userInfo });
    dispatch({ type: actionTypes.updateStatus, loading: false });
  } catch (error) {
    dispatch({ type: actionTypes.updateStatus, error, loading: false });
  }
}

export const actionCreators = {
  initChallengeList: () => async (dispatch, getState) => {
    await initChallengeList(dispatch, getState);
  },
  showChallengeCardModal: () => (dispatch) => {
    dispatch({ type: actionTypes.showChallengeModal });
  },
  closeChallengeCardModal: () => (dispatch) => {
    dispatch({ type: actionTypes.closeChallengeModal });
  },
};
