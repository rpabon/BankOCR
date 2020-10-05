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
  // Exit recursive function
  if (index === dataAsLineArray.length) return outputLineString;

  const currentLine = dataAsLineArray[index];
  let updatedLineGroup = [...lineGroup];

  if (dataAsLineArray[index]) {
    updatedLineGroup.push(currentLine);
  }

  if (
    updatedLineGroup.length &&
    (!currentLine || index === dataAsLineArray.length - 1)
  ) {
    const numbersMatrix = getNumbersMatrix(updatedLineGroup);
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
