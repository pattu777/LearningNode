/*
Problem Statement:
==================
Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument. Collect all data from the server (not
just the first "data" event) and then write two lines to the console
(stdout).

The first line you write should just be an integer representing the number
of characters received from the server. The second line should contain the
complete String of characters sent by the server.
*/
const bl = require('bl');
const http = require('http');
const url = process.argv[2];

// Method - 1
let data = '';
let request = http.get(url, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (chunk) {
    // totalCharacters += chunk.length;
    data += chunk;
  });

  response.on('error', function (err) {
    console.log(err);
  })

  response.on('end', function () {
    console.log(data.length);
    console.log(data.toString());
  });
});

// Method - 2
http.get(url, function (response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    if (err) return console.log(err);

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
