import { actionTypes } from '../actions/actionTypes';

export const initialState = {
  loading: false,
  info: null,
  error: null,
  success: null,
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.updateStatus: {
      return {
        ...state,
        loading: action.loading || false,
        info: action.info || null,
        error: !action.error || Object.keys(action.error).length === 0 ? null : action.error,
        success: action.success || null,
      };
    }
    default:
      return state;
  }
}