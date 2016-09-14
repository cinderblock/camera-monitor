var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

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
  if (err.port) {
    console.log(`Error: Address (${err.address} ${err.port}) already in use.`);
  } else {
    console.log('Other Error:');
    console.log(err);
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

StartListening();
