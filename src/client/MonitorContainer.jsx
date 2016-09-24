import React from 'react';
import CameraMonitor from './CameraMonitor.jsx';

let serverOrigin =
  process.env.npm_package_config_serverorigin ||
  (
    'http://'+
    (process.env.npm_package_config_hostname || 'localhost')+
    (process.env.npm_package_config_port || 9000)
  )
  ;

export default class MonitorContainer extends React.Component {
  render() {
    return (
      <CameraMonitor serverOrigin={serverOrigin} />
    );
  }
};
