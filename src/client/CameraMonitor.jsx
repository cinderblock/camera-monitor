import React from 'react';
import Camera from './Camera.jsx';

export default class CameraMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cameraComponents: props.cameraComponents};
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
