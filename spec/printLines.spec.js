const getOutputLines = require('../src/getOutputLines');
const { error } = require('../src/numberList');

it('should print lines correctly', () => {
  const inputText = [
    '    _  _     _  _  _  _  _ ',
    '  | _| _||_||_ |_   ||_||_|',
    '  ||_  _|  | _||_|  ||_| _|',
    '',
    '    _  _  _  _  _  _     _ ',
    '|_||_|| || ||_   |  |  ||_ ',
    '  | _||_||_||_|  |  |  | _|',
    '',
    ' _  _ ',
    ' _| _|',
    '|_  _|',
    '',
  ];

  expect(getOutputLines(inputText)).toBe('123456789\n' + '490067715\n' + '23');
});

it('should print error message on invalid inputs', () => {
  const inputText = [
    '',
    '    _  _     _  _  _  _  _ ',
    '| ||_| _||_||_ |_   ||_||_|',
    '  ||_  _|  | _||_|  ||_| _|',
    '',
    '',
    '',
    ' _  _ ',
    '|_| _|',
    '|_  _|',
    '',
  ];

  expect(getOutputLines(inputText)).toBe(error + '\n' + error);
});
