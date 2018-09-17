import { guid } from '../../../../helpers';

export default parentGuid => ({
  cardType: 'variable',
  cardGuid: guid(),
  parentGuid,
  isRemovable: true,
  variableName: '',
  variableValue: ''
});
