import React from 'react';
import Camera from './Camera.jsx';

import request from 'browser-request';

export default class CameraMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cameraComponents: props.cameraComponents};
  }
  componentDidMount() {
    var cameras = this.props.cameraComponents;

    if (!cameras) {
      request(this.props.serverOrigin + '/cameras', (err, res, body) => {
        body = JSON.parse(body);
        cameras = new Array(body.length);
        for (let i = 0; i < body.length; i++) {
          let opts = body[i];
          cameras[i] = {
            driver: opts.driver,
            origin: this.props.serverOrigin + '/camera/' + i,
          };
        }
        this.setState({cameraComponents: cameras});
      });
    }
  }
  render() {

    let cameraComponents = this.state.cameraComponents ? new Array(this.state.cameraComponents.length) : [];

    for (let i = 0; i < cameraComponents.length; i++) {
      let opts = this.state.cameraComponents[i];
      cameraComponents[i] = <Camera key={i} driver={opts.driver} origin={opts.origin} />;
    }

    return (
      <div className="CameraMonitor">{cameraComponents}</div>
    );
  }
};
