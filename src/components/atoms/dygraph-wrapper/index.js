import React, { Component } from 'react';
import Dygraph from 'dygraphs';

class DygraphWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      g: null,
    };
    this.dygraphContainer = React.createRef();
  }

  render() {
    const { dygraphContainer } = this;
    const { style } = this.props;
    return <div style={style} ref={dygraphContainer} />;
  }

  componentDidMount() {
    const { data, options } = this.props;
    const g = new Dygraph(this.dygraphContainer.current, data, options || {});
    this.setState({ g });
  }

  componentDidUpdate() {
    this.state.g.updateOptions({ file: this.props.data });
  }
}

export default DygraphWrapper;
