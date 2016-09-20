

var Cameras = [];

let camerasFile = process.env.npm_package_config_camerasfile || '../cameras.json';

require(camerasFile).forEach(options => {
  Cameras.push({
    options,
    camera: new require(`./cameras/${options.driver}.js`)(options),
  });
});

module.exports = Cameras;
