var test = require('tape');
var got = require('got');
var createServer = require('../server');

test('server loads homepage', function(t) {
  t.plan(1)

  var server = createServer()

  got({
    url: "http://localhost:8080/",
    method: "get"
  }).then(function(result){
    t.assert(result.headers['content-type'] === 'text/html')

    server.close()
  })
})


test('server loads bundle', function(t) {
  t.plan(1)

  var server = createServer()

  got({
    url: "http://localhost:8080/bundle.js",
    method: "get"
  }).then(function(result){
    t.assert(result.headers['content-type'] === 'text/json')

    server.close()
  })
})

test('server loads style', function(t) {
  t.plan(1)

  var server = createServer()

  got({
    url: "http://localhost:8080/style.css",
    method: "get"
  }).then(function(result){
    t.assert(result.headers['content-type'] === 'text/css')

    server.close()
  })
})
