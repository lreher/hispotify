var fs = require('fs');
var path = require('path');

var auth = require('../auth');

module.exports = function(request, response) {
  var url = request.url;
  var servePath

  console.log(url)

  switch(url) {
    case '/':
      servePath = path.resolve(__dirname, "../client/static/index.html");

      response.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(servePath, 'utf-8').pipe(response);

      break;

    case '/bundle.js':
      servePath = path.resolve(__dirname, "../client/static/bundle.js");

      response.writeHead(200, { 'Content-Type': 'text/json' });
      fs.createReadStream(servePath, 'utf-8').pipe(response);

      break;

    case '/style.css':
      servePath = path.resolve(__dirname, "../client/static/style.css");

      response.writeHead(200, { 'Content-Type': 'text/css' });
      fs.createReadStream(servePath, 'utf-8').pipe(response);
      
      break;
    
    // Spotify Redirect
    case (url.match(/callback/) || {}).input:
      code = url.replace("/callback?code=", "");

      auth.authorize(code, function(error, authorization) {
        if (error) {;
          response.writeHead(500);
          response.end("Failed to Authenticate to Spotify");
          return;
        }

        response.writeHead(302, { 'Location': '.' });
        response.end();
      })

      break;


    default:
      response.writeHead(400);
      response.end("Bad Request.");
  }
}
