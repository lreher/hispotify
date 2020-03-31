var fs = require('fs');
var path = require('path');

module.exports = function(request, response) {
  var url = request.url;
  var servePath

  switch(url) {
    case '/':
      servePath = path.resolve(__dirname, "../client/static/index.html")

      response.writeHead(200, { 'Content-Type': 'text/html' })
      fs.createReadStream(servePath, 'utf-8').pipe(response)

      break;

    case '/bundle.js':
      servePath = path.resolve(__dirname, "../client/static/bundle.js")

      response.writeHead(200, { 'Content-Type': 'text/json' })
      fs.createReadStream(servePath, 'utf-8').pipe(response)

      break;

    case '/style.css':
      servePath = path.resolve(__dirname, "../client/static/style.css")

      response.writeHead(200, { 'Content-Type': 'text/json' })
      fs.createReadStream(servePath, 'utf-8').pipe(response)

    case 'mock':
      var mockSet1 = {
        hi: "friend",
        how: "are you"
      }

      var mockSet2 = {
        bye: "friend",
        see: "ya later"
      }

      response.writeHead(200);
      response.end(JSON.stringify(devices));

    default:
      response.writeHead(400);
      response.end("Bad Request.");
  }
}
