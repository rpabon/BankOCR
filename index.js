const fs = require('fs');
const path = require('path');
const getOutputLines = require('./src/getOutputLines');

const filePath = path.join(__dirname, process.argv[2]);
const data = fs.readFileSync(filePath, 'utf8');

/**
 * The characters are read from the text file, then stored in an array.
 * Each row of the array is a string corresponding to a line.
 */
const outputLines = getOutputLines(data.split('\n'));

console.log(outputLines);
