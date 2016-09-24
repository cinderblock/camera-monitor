

var Cameras = [];

import config from './config.js';

require(config.server.camerasFile).forEach(options => {
  let Camera = require(`./cameras/${options.driver}.js`);
  let camera = new Camera(options);
  Cameras.push({
    options,
    camera,
  });
});

module.exports = Cameras;
