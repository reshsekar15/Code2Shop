import actionTypes from './actionTypes';

export default {
  sendError: (error, errorInfo) => (dispatch) => {
    dispatch({
      type: actionTypes.updateStatus,
      error,
      errorInfo,
      loading: false
    });
  },
};
