import React from 'react';
import {Button} from 'react-bootstrap';

import AxisCamera from './AxisCamera.jsx';

var drivers = {
  axis: AxisCamera,
};

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      React.createElement(drivers[this.props.driver], this.props)
    );
  }
};
