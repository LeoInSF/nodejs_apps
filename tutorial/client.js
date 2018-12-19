var http = require('http');

// Options to be used by the request
var options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
};

// Callback function is used to deal with response
var callback = function(response) {
  // Continuously update the stream with data
  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    // Data received completely.
    console.log(body);
  });
}
// Make the request to the server
var req = http.request(options, callback);
req.end();
