import React from 'react';
import {Button} from 'react-bootstrap';

import request from 'browser-request';

export default class AxisCamera extends React.Component {
  constructor(props) {
    super(props);
    this.control = this.control.bind(this);
  }
  control () {
    let url = [this.props.origin, ...arguments].join('/');

    request(url, (err, res, body) => {
      if (err) console.log(err);
      console.log(res);
    });
  }
  render() {
    return (
      <div className="axisCamera">
        <div>
          <Button onClick={()=>this.control('up')   }>Up</Button>
          <Button onClick={()=>this.control('down') }>Down</Button>
          <Button onClick={()=>this.control('left') }>Left</Button>
          <Button onClick={()=>this.control('right')}>Right</Button>

          <Button onClick={()=>this.control('zoom',  2500)}>Zoom In</Button>
          <Button onClick={()=>this.control('zoom', -2500)}>Zoom Out</Button>
        </div>
        <img src={this.props.origin + '/video'} />
      </div>
    );
  }
};
