var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var net = require('net');
var fs = require('fs');

let app = express();
let server = http.Server(app);

let listen = process.env.npm_package_config_socket || process.env.npm_package_config_port || process.env.npm_package_config_listen || 9000;

let StartListening = server.listen.bind(
  server,
  listen,
  process.env.npm_package_config_hostname,
  () => {
    console.log('Listening at:', server.address());
  }
);

server.on('error', err => {
  if (err.code == 'EADDRINUSE') {
    if (err.port > 0) {
      console.log(`Error: Address (${err.address} ${err.port}) already in use.`);
    } else if (err.address) {
      // Try to connect. If not running, remove and continue.

      var clientSocket = new net.Socket();

      clientSocket.on('error', e => {
        if (e.code == 'ECONNREFUSED') {
          fs.unlinkSync(err.address);
          StartListening();
        }
      });
      clientSocket.connect({path: err.address}, () => {
        console.log('Server running. Giving up...');
        clientSocket.unref();
      });
    } else {
      throw err;
    }
  } else {
    throw err;
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

StartListening();
