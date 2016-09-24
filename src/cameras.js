

var Cameras = [];

import config from './config.js';

require(config.server.camerasFile).forEach(options => {
  Cameras.push({
    options,
    camera: new require(`./cameras/${options.driver}.js`)(options),
  });
});

module.exports = Cameras;
