import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'conditional',
  cardGuid: guid(),
  parentGuid: null,
  isRemovable: true,
  conditionals: [{
    type: 'If',
    variableCheck: cardData ? cardData.variableCheck : '',
    truthOperator: cardData ? cardData.truthOperator : '',
    truthValue: cardData ? cardData.truthValue : '',
    actions: []
  }, {
    type: 'Else',
    variableCheck: null,
    truthOperator: null,
    truthValue: null,
    actions: []
  }]
});
