import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'modifier',
  cardGuid: guid(),
  modifierName: cardData ? cardData.modifierName : '',
  modifierOperator: cardData ? cardData.modifierOperator : 'add',
  modifierValue: cardData ? cardData.modifierValue : 1
});
