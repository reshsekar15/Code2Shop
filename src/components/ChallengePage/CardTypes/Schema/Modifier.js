import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'modifier',
  cardGuid: guid(),
  settingVariable: cardData ? cardData.settingVariable : '',
  modifierName: cardData ? cardData.modifierName : '',
  modifierOperator: cardData ? cardData.modifierOperator : 'add',
  modifierValue: cardData ? cardData.modifierValue : 1
});
