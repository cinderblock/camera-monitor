import React from 'react';
import CameraMonitor from './CameraMonitor.jsx';

var config = require('../config.js').default.client;

export default class MonitorContainer extends React.Component {
  render() {
    return (
      <CameraMonitor serverOrigin={config.serverOrigin} />
    );
  }
};
