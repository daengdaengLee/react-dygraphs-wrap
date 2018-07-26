import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DygraphWrapper from '../../atoms/dygraph-wrapper';

class DygraphWrapperDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [[1, 10], [2, 13], [3, 7], [4, 17]],
      options: { labels: ['x', 'A'] },
      timer: null,
    };
    this._handleClickStart = this._handleClickStart.bind(this);
    this._handleClickEnd = this._handleClickEnd.bind(this);
  }

  render() {
    const { _handleClickStart, _handleClickEnd } = this;
    const { data, options } = this.state;
    return (
      <div>
        <DygraphWrapper
          data={data}
          options={options}
          style={{ width: '700px', height: '500px' }}
        />
        <div
          style={{
            display: 'flex',
            width: '700px',
            justifyContent: 'space-around',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={_handleClickStart}
          >
            START UPDATE DATA
          </Button>
          <Button variant="contained" color="primary" onClick={_handleClickEnd}>
            END UPDATE DATA
          </Button>
        </div>
      </div>
    );
  }

  _handleClickStart() {
    const timer = setInterval(
      () =>
        this.setState(prevState => ({
          data: [
            ...prevState.data,
            [prevState.data.length + 1, Math.random() * 20],
          ],
        })),
      1000,
    );
    this.setState({ timer });
  }

  _handleClickEnd() {
    if (this.state.timer === null) {
      return;
    }
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  }
}

export default DygraphWrapperDemo;
