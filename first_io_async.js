/*
Problem Statement:
==================
Write a program that uses a single asynchronous filesystem operation to
read a file and print the number of newlines it contains to the console
(stdout), similar to running cat file | wc -l.
*/
var fs = require('fs');

let totalLines = 0;
let filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function(err, data) {
  if (err) return console.log(err);
  totalLines += data.split('\n').length - 1;
  console.log(totalLines);
});

