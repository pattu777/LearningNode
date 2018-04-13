/*
Problem Statement:
==================
Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

   {
     "hour": 14,
     "minute": 23,
     "second": 15
   }

Add second endpoint for the path '/api/unixtime' which accepts the same
query string but returns UNIX epoch time in milliseconds (the number of
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:

   { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to
your program.
*/
const url = require('url');
const http = require('http');
const moment = require('moment');
const port = process.argv[2];

let server = http.createServer(function(request, response) {
  let param;
  let resData = null;
  let urlRoute = url.parse(request.url, true);
  response.writeHead(200, {'Content-Type': 'application/json'})

  if (urlRoute.pathname === '/api/parsetime') {
    param = urlRoute.query.iso;
    param = moment(param);
    resData = {
      'hour': param.hour(),
      'minute': param.minute(),
      'second': param.second()
    }
  } else if(urlRoute.pathname === '/api/unixtime') {
    param = urlRoute.query.iso;
    resData = {
      'unixtime': moment(param).valueOf()
    }
  }

  if (resData) {
    response.end(JSON.stringify(resData));
  }
});

server.listen(port);
