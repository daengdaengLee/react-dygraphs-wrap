import React, { Component } from 'react';
import Dygraph from 'dygraphs';

class DygraphDemo4 extends Component {
  constructor(props) {
    super(props);
    this.dygraphContainer = React.createRef();
  }

  render() {
    const { dygraphContainer } = this;
    return (
      <div style={{ width: '480px', height: '320px' }} ref={dygraphContainer} />
    );
  }

  componentDidMount() {
    new Dygraph(this.dygraphContainer.current, '/csv/twonormals.csv', {
      rollPeriod: 7,
      showRoller: true,
      errorBars: true,
      valueRange: [50, 125],
    });
  }
}

export default DygraphDemo4;
