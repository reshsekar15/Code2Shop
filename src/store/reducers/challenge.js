import actionTypes from '../actions/actionTypes';
import { guid } from '../../helpers';

const initialState = {
  listOfChallenges: [],
  selectedChallenge: null,
  showCardSelectMenu: false,
  parentGuid: null,
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
        variableList: [
          ...state.variableList,
          { ...action.card }
        ],
        parentGuid: null,
        showCardSelectMenu: false
      };
    case actionTypes.updateChallengeCard:
      // console.log(...state.variableList, ...action.card);
      return {
        ...state,
        variableList: action.variableList
      };
    case actionTypes.removeChallengeCard:
      return {
        ...state,
        variableList: action.variableList
      };
    case actionTypes.showChallengeModal:
      return {
        ...state,
        parentGuid: action.parentGuid,
        showCardSelectMenu: true
      };
    case actionTypes.closeChallengeModal:
      return {
        ...state,
        parentGuid: null,
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
