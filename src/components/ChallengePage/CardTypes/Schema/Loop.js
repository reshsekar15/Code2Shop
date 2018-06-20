import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'loop',
  cardGuid: guid(),
  parentGuid: null,
  isRemovable: true,
  variableCheck: cardData ? cardData.variableCheck : '',
  truthOperator: cardData ? cardData.truthOperator : '',
  truthValue: cardData ? cardData.truthValue : '',
  actions: []
});
