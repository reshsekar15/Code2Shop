import { guid } from '../../../../helpers';

export default parentGuid => ({
  cardType: 'conditional',
  cardGuid: guid(),
  parentGuid,
  isRemovable: true,
  conditionals: [{
    type: 'If',
    conditionalGuid: guid(),
    variableCheck: '',
    truthOperator: '',
    truthValue: '',
    actions: []
  }, {
    type: 'Else',
    conditionalGuid: guid(),
    variableCheck: null,
    truthOperator: null,
    truthValue: null,
    actions: []
  }]
});
