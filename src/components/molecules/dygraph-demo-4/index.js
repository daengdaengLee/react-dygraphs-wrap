import React, { Component } from 'react';
import Dygraph from 'dygraphs';

const ROOT_PATH =
  process.env.NODE_ENV === 'production' ? '/react-dygraphs-wrap' : '';

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
    new Dygraph(
      this.dygraphContainer.current,
      `${ROOT_PATH}/csv/twonormals.csv`,
      {
        rollPeriod: 7,
        showRoller: true,
        errorBars: true,
        valueRange: [50, 125],
      },
    );
  }
}

export default DygraphDemo4;
