import actionTypes from './actionTypes';
// import { firebase } from '../../firebase';

// export async function initChallengeList(dispatch) {
//   try {
//     dispatch({
//       type: actionTypes.updateStatus,
//       loading: true
//     });

//     const userInfo = await firebase.auth.onAuthStateChanged();

//     dispatch({
//       type: actionTypes.initApplication,
//       userInfo
//     });
//     dispatch({
//       type: actionTypes.updateStatus,
//       loading: false
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.updateStatus,
//       error,
//       loading: false
//     });
//   }
// }

export function addChallengeCard(cardSchema, dispatch, getState) {
  try {
    const {
      variableList,
      parentGuid
    } = getState().challenge;

    variableList.push({ ...cardSchema, parentGuid });

    dispatch({
      type: actionTypes.addChallengeCard,
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
  try {
    const {
      variableList
    } = getState().challenge;

    // const cardData = variableList.find(v => v.cardGuid === cardGuid);

    variableList.forEach((card) => {
      if (card.cardGuid === cardGuid) {
        card[prop] = value;
      }
    });

    dispatch({
      type: actionTypes.updateChallengeCard,
      variableList
    });
  } catch (error) {
    dispatch({
      type: actionTypes.updateStatus,
      error,
      loading: false
    });
  }
}

// function arrFunc(cardGuid, cardArray) {
//   cardArray.children.forEach((v, i) => {
//     const array = v.children.filter(val => val.cardGuid === cardGuid);

//     if (array.length > 0) {

//     }

//     arrFunc(cardGuid, v.children);
//   });
// }

export function removeChallengeCard(cardGuid, dispatch, getState) {
  try {
    const {
      variableList
    } = getState().challenge;

    const newVariableList = variableList.reduce((t, c) => {
      if (c.cardGuid !== cardGuid && c.parentGuid !== cardGuid) {
        console.log(cardGuid, c);
        t.push(c);
      }
      return t;
    }, []);

    dispatch({
      type: actionTypes.updateChallengeCard,
      variableList: newVariableList
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
  // initChallengeList: () => async (dispatch, getState) => {
  //   await initChallengeList(dispatch, getState);
  // },
  addChallengeCard: cardSchema => (dispatch, getState) => {
    addChallengeCard(cardSchema, dispatch, getState);
  },
  updateChallengeCard: (cardGuid, prop, value) => (dispatch, getState) => {
    console.log(getState());
    updateChallengeCard(cardGuid, prop, value, dispatch, getState);
  },
  removeChallengeCard: cardGuid => (dispatch, getState) => {
    removeChallengeCard(cardGuid, dispatch, getState);
  },
  showChallengeCardModal: parentGuid => (dispatch) => {
    dispatch({
      type: actionTypes.showChallengeModal,
      parentGuid
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
