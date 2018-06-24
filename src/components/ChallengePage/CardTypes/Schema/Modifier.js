import { guid } from '../../../../helpers';

export default parentGuid => ({
  cardType: 'modifier',
  cardGuid: guid(),
  parentGuid,
  isRemovable: true,
  settingVariable: '',
  modifierName: '',
  modifierOperator: '',
  modifierValue: ''
});
