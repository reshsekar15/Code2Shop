import actionTypes from '../actions/actionTypes';
import { guid } from '../../helpers';

const initialState = {
  listOfChallenges: [],
  selectedChallenge: null,
  showCardSelectMenu: false,
  challengeRenderStructure: {
    type: 'root',
    guid: guid(),
    isRemovable: false,
    children: [],
  },
  variableList: [],
  challengeCompileStructure: [],
  challengeListLoading: true,
  challengePageLoading: true,
};

export default function challengeReducer(state = initialState, action) {
  console.log(action);
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
        challengeRenderStructure: action.challengeRenderStructure,
        challengeCompileStructure: action.challengeCompileStructure,
        variableList: action.variableList
      };
    case actionTypes.addChallengeCard:
      return {
        ...state,
        challengeRenderStructure: action.challengeRenderStructure,
        challengeCompileStructure: action.challengeCompileStructure,
        variableList: action.variableList,
        showCardSelectMenu: false
      };
    case actionTypes.updateChallengeCard:
      return {
        ...state,
        variableList: action.variableList
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
