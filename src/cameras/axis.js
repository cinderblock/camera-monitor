var request = require('request');

function noop() {};

module.exports = function (opts) {
  var camera = {};
  var host = opts.url;
  var auth = opts.username ? 'Basic ' + new Buffer(opts.username + ':' + opts.password).toString('base64') : '';

  var headers = {};
  if (auth) headers.authorization = auth;
  headers.connection = 'keep-alive';

  var get = function (query, cb) {
    request(host + '/axis-cgi/com/ptz.cgi?camera=1&' + query, {headers: headers}, cb || noop);
  };

  camera.video = function () {
    return request(host + '/mjpg/video.mjpg', {headers: headers});
  };

  camera.left = function (cb) {
    get('move=left', cb || noop);
  };

  camera.right = function (cb) {
    get('move=right', cb || noop);
  };

  camera.up = function (cb) {
    get('move=up', cb || noop);
  };

  camera.down = function (cb) {
    get('move=down', cb || noop);
  };

  camera.zoom = function (level, cb) {
    get('rzoom=' + level, cb || noop);
  };

  camera.focus = function (level, cb) {
    get('rfocus=' + level, cb || noop);
  };

  camera.iris = function (level, cb) {
    get('riris=' + level, cb || noop);
  };

  return camera
};
