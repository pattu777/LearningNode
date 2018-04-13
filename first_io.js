/*
Problem Statement:
==================
Write a program that uses a single synchronous filesystem operation to
read a file and print the number of newlines (\n) it contains to the
console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first
command-line argument (i.e., process.argv[2]). You do not need to make
your own test file.
*/
const fs = require('fs');

let totalLines = 0;
filePath = process.argv[2];

// Method 1 - Using file streaming method
/*
const lineFeed = '\n'.charCodeAt(0);
fs.createReadStream(filePath)
  .on('data', chunk => {
    for(let i=0; i<chunk.length; i++) {
      if (chunk[i] == lineFeed) {
        totalLines += 1;
      }
    }
  })
  .on('end', function() {
    console.log(totalLines);
  })
;
*/

// Method - 2
/*
let textFile = fs.readFileSync(filePath);
let fileContent = textFile.toString();
for (let i=0; i<fileContent.length; i++) {
  if (fileContent[i] == '\n') {
    totalLines += 1;
  }
}
console.log(totalLines);
*/

// Method - 3
let contents = fs.readFileSync(filePath)
let lines = contents.toString().split('\n').length - 1
console.log(lines)
