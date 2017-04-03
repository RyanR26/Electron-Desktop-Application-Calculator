export const OPERATORS = {
  add: '+',
  subtract: '-',
  multiply: 'x',
  divide: '/',
  equals: '='
};

export const ACTIONS = {
  clear: 'C',
  clearAll: 'CA'
};

export const UI_ELEMENTS_BUTTONS = [
  { type: 'action', name: 'clear-all', value: 'CA' },
  { type: 'action', name: 'clear', value: 'C' },
  { type: 'numeric', name: 'seven', value: '7' },
  { type: 'numeric', name: 'eight', value: '8' },
  { type: 'numeric', name: 'nine', value: '9' },
  { type: 'operator', name: 'divide', value: '/' },
  { type: 'numeric', name: 'four', value: '4' },
  { type: 'numeric', name: 'five', value: '5' },
  { type: 'numeric', name: 'six', value: '6' },
  { type: 'operator', name: 'multiply', value: 'x' },
  { type: 'numeric', name: 'one', value: '1' },
  { type: 'numeric', name: 'two', value: '2' },
  { type: 'numeric', name: 'three', value: '3' },
  { type: 'operator', name: 'subtract', value: '-' },
  { type: 'numeric', name: 'zero', value: '0' },
  { type: 'numeric', name: 'decimal', value: '.' },
  { type: 'action', name: 'equals', value: '=' },
  { type: 'operator', name: 'add', value: '+' }
];
