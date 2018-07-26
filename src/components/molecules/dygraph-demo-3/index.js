import React, { Component } from 'react';
import Dygraph from 'dygraphs';

const ROOT_PATH =
  process.env.NODE_ENV === 'production' ? '/react-dygraphs-wrap' : '';

class DygraphDemo3 extends Component {
  constructor(props) {
    super(props);
    this.dygraphContainer = React.createRef();
  }

  render() {
    const { dygraphContainer } = this;
    return (
      <div style={{ width: '500px', height: '300px' }} ref={dygraphContainer} />
    );
  }

  componentDidMount() {
    new Dygraph(
      this.dygraphContainer.current,
      `${ROOT_PATH}/csv/temperatures.csv`,
      {
        rollPeriod: 7,
        showRoller: true,
      },
    );
  }
}

export default DygraphDemo3;
