import React, { Component } from 'react';
import DygraphDemo1 from './components/DygraphDemo1';
import DygraphDemo2 from './components/DygraphDemo2';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi React!
        <DygraphDemo1 />
        <DygraphDemo2 />
      </div>
    );
  }
}

export default App;
