const fs = require('fs');
const path = require('path');
const getOutputLines = require('./src/getOutputLines');

const filePath = path.join(__dirname, process.argv[2]);
const data = fs.readFileSync(filePath, 'utf8');
const outputLines = getOutputLines(data.split('\n'));

console.log(outputLines);
