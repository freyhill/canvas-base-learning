var express = require('express');
var app = express();
var http = require('http');
var port = '3000';

app.use(express.static('./src'));
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

server.on('listening', onListening);

function onListening() {

  var addr = server.address();
  var bind = typeof addr === 'string'  ? 'pipe ' + addr  : 'port ' + addr.port;
  console.log("server port 3000 listening ....");
 }
