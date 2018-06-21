import { guid } from '../../../../helpers';

export default parentGuid => ({
  cardType: 'loop',
  cardGuid: guid(),
  parentGuid,
  isRemovable: true,
  variableCheck: '',
  truthOperator: '',
  truthValue: '',
});
