
export default {
  server: {
    listen: process.env.npm_package_config_socket || process.env.npm_package_config_port || process.env.npm_package_config_listen || 9000,
    hostname: process.env.npm_package_config_hostname,
    socketMode: process.env.npm_package_config_socketmode || process.env.socketmode,
    camerasFile: process.env.npm_package_config_camerasfile || '../cameras.json',
  },
  client: {
    origin:
      process.env.npm_package_config_serverorigin ||
      (
        'http://' +
        (process.env.npm_package_config_hostname || 'localhost') +
        (process.env.npm_package_config_port || 9000)
      ),
  }
};
