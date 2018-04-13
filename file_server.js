/*
Problem Statement:
==================
Write an HTTP server that serves the same text file for each request it
receives.

Your server should listen on the port provided by the first argument to
your program.

You will be provided with the location of the file to serve as the second
command-line argument. You must use the fs.createReadStream() method to
stream the file contents to the response.
*/
const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const fileLoc = process.argv[3];

let server = http.createServer(function (request, response) {
  fs.createReadStream(fileLoc).pipe(response);
});

server.listen(port);
