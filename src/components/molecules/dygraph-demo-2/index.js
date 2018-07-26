import React, { Component } from 'react';
import Dygraph from 'dygraphs';

class DygraphDemo2 extends Component {
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
    new Dygraph(this.dygraphContainer.current, '/csv/temperatures.csv', {});
  }
}

export default DygraphDemo2;
