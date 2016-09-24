var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var net = require('net');
var fs = require('fs');

import config from './config.js';
var cameras = require('./cameras.js');

let app = express();
let server = http.Server(app);

let StartListening = server.listen.bind(
  server,
  config.server.listen,
  config.server.hostname);

server.on('listening', () => {
  let addr = server.address();
  if (addr.port && (addr.port > 0)) {
    // listening on a port
  } else {
    // listening on a socket
    if (config.server.socketMode) fs.chmodSync(addr, config.server.socketMode);
  }
  console.log('Listening at:', addr);
});

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

app.get('/cameras', function (req, res) {
  let list = new Array(cameras.length);
  for (let i = 0; i < cameras.length; i++) {
    list[i] = {
      name: cameras[i].options.name,
      driver: cameras[i].options.driver,
    };
  }
  res.header('Access-Control-Allow-Origin', '*');
  res.json(list);
});

app.get('/camera/:cameraId/video', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.video().pipe(res);
});

app.get('/camera/:cameraId/driver', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.json(cameras[parseInt(req.params.cameraId)].options.driver);
});

app.get('/camera/:cameraId/up', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.up();
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

app.get('/camera/:cameraId/down', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.down();
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

app.get('/camera/:cameraId/left', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.left();
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

app.get('/camera/:cameraId/right', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.right();
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

app.get('/camera/:cameraId/zoom/:level', function (req, res) {
  cameras[parseInt(req.params.cameraId)].camera.zoom(req.params.level);
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

StartListening();
