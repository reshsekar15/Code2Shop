import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'variable',
  cardGuid: guid(),
  parentGuid: null,
  isRemovable: true,
  variableName: cardData ? cardData.variableName : '',
  variableValue: cardData ? cardData.variableValue : ''
});
