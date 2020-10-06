const getNumbersMatrix = require('./getNumbersMatrix.js');
const getLineString = require('./getLineString.js');

/**
 * Print the number sequences lines for the input text files
 * @param {string[]} dataAsLineArray - Raw data coming from the text file
 * @param {number} index - Current dataAsLineArray line index
 * @param {string[]} lineGroup - Temp group of collected lines through iteration
 */
function getOutputLines(
  dataAsLineArray,
  index = 0,
  lineGroup = [],
  outputLineString = ''
) {
  // Remove last line break and exit recursive function
  if (index === dataAsLineArray.length) {
    return outputLineString.trim();
  }

  const currentLine = dataAsLineArray[index];
  let updatedLineGroup = [...lineGroup];

  if (dataAsLineArray[index]) {
    updatedLineGroup.push(currentLine);
  }

  /**
   * If the line is empty, it means the OCR block ended.
   * An array of arrays is created, each row is a single OCR number.
   */
  if (
    updatedLineGroup.length &&
    (!currentLine || index === dataAsLineArray.length - 1)
  ) {
    const numbersMatrix = getNumbersMatrix(updatedLineGroup);

    // Add numbers to the string to be displayed
    outputLineString += getLineString(numbersMatrix) + '\n';

    // Start a new OCR line
    updatedLineGroup = [];
  }

  return getOutputLines(
    dataAsLineArray,
    index + 1,
    updatedLineGroup,
    outputLineString
  );
}

module.exports = getOutputLines;
