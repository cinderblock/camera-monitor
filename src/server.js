var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

let app = express();
let server = http.Server(app);

server.listen(
  process.env.npm_package_config_socket || process.env.npm_package_config_port || process.env.npm_package_config_listen || 9000,
  process.env.npm_package_config_hostname,
  () => {
    console.log('Listening at:', server.address());
  }
);

app.get('/', function (req, res) {
  res.send('Hello World!');
});
