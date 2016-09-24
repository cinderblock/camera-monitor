import React from 'react';
import {Button} from 'react-bootstrap';

export default class AxisCamera extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="axisCamera">
        <img src={this.props.origin + '/video'} />
        <Button>Up</Button>
      </div>
    );
  }
};
