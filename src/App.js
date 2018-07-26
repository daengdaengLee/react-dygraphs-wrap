import React, { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from './components/pages/main-page';

const App = () => (
  <Router>
    <Fragment>
      <CssBaseline />
      <MainPage />
    </Fragment>
  </Router>
);

export default App;
