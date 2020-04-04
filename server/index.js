var http = require('http')
var router = require('../router')

module.exports = function() {
  var server = http.createServer(router)

  return server.listen(8081)
}
