export const operatorOptions = cardGuid => ([{
  key: `${cardGuid}_multiply`,
  text: 'multiply',
  value: 'multiply',
}, {
  key: `${cardGuid}_divide`,
  text: 'divide',
  value: 'divide',
}, {
  key: `${cardGuid}_add`,
  text: 'add',
  value: 'add',
}, {
  key: `${cardGuid}_subtract`,
  text: 'subtract',
  value: 'subtract',
}]);

export function operatorFunctions(operator, v1, v2) {
  switch (operator) {
    case 'multiply':
      return v1 * v2;
    case 'divide':
      return v1 / v2;
    case 'add':
      return v1 + v2;
    case 'subtract':
      return v1 - v2;
    default:
      return v1;
  }
}

export const truthOperators = cardGuid => ([{
  key: `${cardGuid}_equal_to`,
  text: 'equal to',
  value: 'equal_to',
}, {
  key: `${cardGuid}_not_equal_to`,
  text: 'not equal',
  value: 'not_equal_to',
}, {
  key: `${cardGuid}_less_than`,
  text: '<',
  value: 'less_than',
}, {
  key: `${cardGuid}_like`,
  text: 'like',
  value: 'like',
}, {
  key: `${cardGuid}_less_than_or_equal_to`,
  text: '<=',
  value: 'less_than_or_equal_to',
}, {
  key: `${cardGuid}_greater_than`,
  text: '>',
  value: 'greater_than',
}, {
  key: `${cardGuid}_greater_than_or_equal_to`,
  text: '>=',
  value: 'greater_than_or_equal_to',
}]);

export function truthFunctions(operator, v1, v2) {
  switch (operator) {
    case 'equal_to':
      return v1 === v2;
    case 'not_equal_to':
      return v1 !== v2;
    case 'like':
      return String(v1).indexOf(v2) > -1;
    case 'less_than':
      return v1 < v2;
    case 'less_than_or_equal_to':
      return v1 <= v2;
    case 'greater_than':
      return v1 > v2;
    case 'greater_than_or_equal_to':
      return v1 >= v2;
    default:
      return v1;
  }
}
