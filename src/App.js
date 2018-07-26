import React, { Component } from 'react';
import DygraphDemo1 from './components/DygraphDemo1';
import DygraphDemo2 from './components/DygraphDemo2';
import DygraphDemo3 from './components/DygraphDemo3';
import DygraphDemo4 from './components/DygraphDemo4';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi React!
        <DygraphDemo1 />
        <DygraphDemo2 />
        <DygraphDemo3 />
        <DygraphDemo4 />
      </div>
    );
  }
}

export default App;
