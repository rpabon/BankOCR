const getOutputLines = require('../src/getOutputLines');

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

  expect(getOutputLines(inputText)).toBe(
    '123456789\n' + '490067715\n' + '23\n'
  );
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

  expect(getOutputLines(inputText)).toBe(
    '-Error in data--Error in data-3456789\n' + '-Error in data-3\n'
  );
});
