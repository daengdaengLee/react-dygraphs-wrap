import React, { Component } from 'react';
import Dygraph from 'dygraphs';

class DygraphDemo1 extends Component {
  constructor(props) {
    super(props);
    this.dygraphContainer = React.createRef();
  }

  render() {
    const { dygraphContainer } = this;
    return <div ref={dygraphContainer} />;
  }

  componentDidMount() {
    new Dygraph(
      this.dygraphContainer.current,
      'Date,Temperature\n' +
        '2008-05-07,75\n' +
        '2008-05-08,70\n' +
        '2008-05-09,80\n',
    );
  }
}

export default DygraphDemo1;
