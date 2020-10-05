const {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  error,
} = require('./numberList');

function evaluateMatrixLine(matrixNumberRow = []) {
  const stringLine = JSON.stringify(matrixNumberRow);

  if (stringLine === zero) {
    return '0';
  } else if (stringLine === one) {
    return '1';
  } else if (stringLine === two) {
    return '2';
  } else if (stringLine === three) {
    return '3';
  } else if (stringLine === four) {
    return '4';
  } else if (stringLine === five) {
    return '5';
  } else if (stringLine === six) {
    return '6';
  } else if (stringLine === seven) {
    return '7';
  } else if (stringLine === eight) {
    return '8';
  } else if (stringLine === nine) {
    return '9';
  } else {
    return error;
  }
}

/**
 * Prepares the string to be printed as output
 * @param {string[][]} numbersMatrix - Each line of the outer array is an OCR number
 * @returns {string} outputLine - String to be printed in the console
 */
function getLineString(numbersMatrix = [], outputString = '', i = 0) {
  if (i === numbersMatrix.length) {
    return outputString;
  }

  const singleNumberString = evaluateMatrixLine(numbersMatrix[i]);

  if (singleNumberString === error) {
    return error;
  }

  return getLineString(numbersMatrix, outputString + singleNumberString, i + 1);
}

module.exports = getLineString;
