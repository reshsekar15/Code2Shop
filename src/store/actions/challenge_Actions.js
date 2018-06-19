import actionTypes from './actionTypes';
import {
  firebase
} from '../../firebase';

export async function initChallengeList(dispatch) {
  try {
    dispatch({
      type: actionTypes.updateStatus,
      loading: true
    });

    const userInfo = await firebase.auth.onAuthStateChanged();

    dispatch({
      type: actionTypes.initApplication,
      userInfo
    });
    dispatch({
      type: actionTypes.updateStatus,
      loading: false
    });
  } catch (error) {
    dispatch({
      type: actionTypes.updateStatus,
      error,
      loading: false
    });
  }
}

export function addChallengeCard(cardSchema, parentGuid = [], dispatch, getState) {
  try {
    const {
      variableList
    } = getState().challenge;

    if (cardSchema.cardType === 'variable') {
      variableList.push(cardSchema);
    }

    const {
      challengeRenderStructure
    } = getState().challenge;

    console.log(getState());

    if (parentGuid.length > 0) {
      let branchChild = challengeRenderStructure;
      parentGuid.forEach((index) => {
        branchChild = branchChild.children[index];
      });

      branchChild.children.push({
        type: cardSchema.cardType,
        guid: cardSchema.cardGuid,
        isRemovable: true,
        children: []
      });
    } else {
      challengeRenderStructure.children.push({
        type: cardSchema.cardType,
        guid: cardSchema.cardGuid,
        isRemovable: true,
        children: []
      });
    }

    console.log({
      type: actionTypes.addChallengeCard,
      challengeRenderStructure,
      variableList,
    });

    dispatch({
      type: actionTypes.addChallengeCard,
      challengeRenderStructure,
      variableList,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.updateStatus,
      error,
      loading: false
    });
  }
}

export function updateChallengeCard(cardData, dispatch, getState) {
  try {
    dispatch({
      type: actionTypes.updateStatus,
      loading: false
    });
  } catch (error) {
    dispatch({
      type: actionTypes.updateStatus,
      error,
      loading: false
    });
  }
}

export const actionCreators = {
  initChallengeList: () => async (dispatch, getState) => {
    await initChallengeList(dispatch, getState);
  },
  addChallengeCard: (cardSchema, parentGuid) => (dispatch, getState) => {
    addChallengeCard(cardSchema, parentGuid, dispatch, getState);
  },
  updateChallengeCard: cardData => (dispatch, getState) => {

  },
  showChallengeCardModal: () => (dispatch) => {
    dispatch({
      type: actionTypes.showChallengeModal
    });
  },
  closeChallengeCardModal: () => (dispatch) => {
    dispatch({
      type: actionTypes.closeChallengeModal
    });
  },
};

// Proposed Render Structure

// {
//   root: [{
//     type: 'variable',
//     guid: '823iugasd',
//     isRemovable: false,
//     children: null,
//   },{
//     type: 'loop',
//     guid: '823isdfugasd',
//     isRemovable: false,
//     children: [{
//       type:'variable',
//       guid: 'wejfw',
//       isRemovable: false,
//       children: null
//     },{
//       type:'modifier',
//       guid: 'wejfw3434',
//       isRemovable: false,
//       children: null
//     },{
//       type:'conditional',
//       guid: 'wejfw',
//       isRemovable: false,
//       children: [{
//         type:'variable',
//         guid: 'wejfw',
//         isRemovable: false,
//         children: null
//       }]
//     }]
//   }]
// }