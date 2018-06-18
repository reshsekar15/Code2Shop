import { guid } from '../../../../helpers';

export default cardData => ({
  cardType: 'variable',
  cardGuid: guid(),
  variableName: cardData ? cardData.variableName : '',
  variableValue: cardData ? cardData.variableValue : 1
});
