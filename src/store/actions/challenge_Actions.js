import actionTypes from './actionTypes';
import { firebase } from '../../firebase';

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

    variableList.push(cardSchema);

    const {
      challengeRenderStructure
    } = getState().challenge;

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

export function updateChallengeCard(cardGuid, prop, value, dispatch, getState) {
  // try {
  const { variableList } = getState().challenge;

  const cardData = variableList.find(v => v.cardGuid === cardGuid);

  cardData[prop] = value;

  console.log(cardGuid, prop, value, variableList);

  dispatch({ type: actionTypes.updateChallengeCard, variableList });
  // } catch (error) {
  //   dispatch({
  //     type: actionTypes.updateStatus,
  //     error,
  //     loading: false
  //   });
  // }
}

// function arrFunc(cardGuid, cardArray) {
//   cardArray.children.forEach((v, i) => {
//     const array = v.children.filter(val => val.cardGuid === cardGuid);

//     if (array.length > 0) {
      
//     }

//     arrFunc(cardGuid, v.children);
//   });
// }

export function removeChallengeCard(cardGuid, parentGuid = [], dispatch, getState) {
  // try {
  const { variableList } = getState().challenge;
  const { challengeRenderStructure } = getState().challenge;

  let branchChild = challengeRenderStructure;
  parentGuid.forEach((index) => {
    branchChild = branchChild.children[index];
  });

  const index = branchChild.children.findIndex(v => v.cardGuid === cardGuid);

  // const arrFunc = (cardGuid) => {

  // }

  // branchChild.splice(index, 1);

  // const cardData = variableList.find(v => v.cardGuid === cardGuid);

  // cardData[prop] = value;

  // console.log(cardGuid, prop, value, variableList);

  dispatch({ type: actionTypes.updateChallengeCard, variableList });
  // } catch (error) {
  //   dispatch({
  //     type: actionTypes.updateStatus,
  //     error,
  //     loading: false
  //   });
  // }
}

export const actionCreators = {
  initChallengeList: () => async (dispatch, getState) => {
    await initChallengeList(dispatch, getState);
  },
  addChallengeCard: (cardSchema, parentGuid) => (dispatch, getState) => {
    addChallengeCard(cardSchema, parentGuid, dispatch, getState);
  },
  updateChallengeCard: (cardGuid, prop, value) => (dispatch, getState) => {
    updateChallengeCard(cardGuid, prop, value, dispatch, getState);
  },
  removeChallengeCard: cardGuid => (dispatch, getState) => {
    removeChallengeCard(cardGuid, dispatch, getState);
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
