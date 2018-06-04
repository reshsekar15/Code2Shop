import actionTypes from '../actions/actionTypes';

const initialState = {
  userInfo: null,
  isDesktop: true,
  isPhone: false,
  isTablet: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.initApplication:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case actionTypes.checkDeviceType:
      return {
        ...state,
        isDesktop: action.isDesktop,
        isTablet: action.isTablet,
        isMobile: action.isMobile,
      };
    default:
      return state;
  }
}