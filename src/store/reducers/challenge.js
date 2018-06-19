import actionTypes from '../actions/actionTypes';

const initialState = {
  listOfChallenges: [],
  selectedChallenge: null,
  showCardSelectMenu: false,
  challengeRenderStructure: {
    root: null
  },
  variableList: [],
  challengeCompileStructure: [],
  challengeListLoading: true,
  challengePageLoading: true,
};

export default function challengeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.initChallengeList:
      return {
        ...state,
        listOfChallenges: action.listOfChallenges,
      };
    case actionTypes.initChallengePage:
      return {
        ...state,
        selectedChallenge: action.selectedChallenge,
      };
    case actionTypes.updateChallengePage:
      return {
        ...state,
        challengeRenderStructure: action.renderStructure,
        challengeCompileStructure: action.compileStructure,
        variableList: action.variableList
      };
    case actionTypes.addChallengeCard:
      return {
        ...state,
        challengeRenderStructure: action.renderStructure,
        challengeCompileStructure: action.compileStructure,
        variableList: action.variableList,
        showCardSelectMenu: false
      };
    case actionTypes.showChallengeModal:
      return {
        ...state,
        showCardSelectMenu: true
      };
    case actionTypes.closeChallengeModal:
      return {
        ...state,
        showCardSelectMenu: false
      };
    case actionTypes.resetInitialState:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
