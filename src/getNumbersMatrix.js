/**
 * Builds a matrix (array of arrays) with the OCR numbers lines
 * @param {string[]} ocrLine - Array of 3 lines describing an OCR input line
 * @return {string[][]} matrix - Each line of the outer array is a single number
 */
function getNumberMatrix(ocrLine = []) {
  const matrix = [];

  for (let i = 0; i < ocrLine.length; i++) {
    const line = ocrLine[i].split('');

    // A new number starts every three characters
    for (let j = 0; j < line.length; j += 3) {
      const index = Math.floor(j / 3);
      const lineSection = line.slice(j, j + 3);

      if (!matrix[index]) {
        matrix[index] = lineSection;
      } else {
        matrix[index].push(...lineSection);
      }
    }
  }

  return matrix;
}

module.exports = getNumberMatrix;
