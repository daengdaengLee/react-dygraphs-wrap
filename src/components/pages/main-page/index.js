import React from 'react';
import MainHeader from '../../organisms/main-header';
import MainSideMenu from '../../organisms/main-side-menu';
import MainContent from '../../organisms/main-content';
import Grid from '@material-ui/core/Grid';

const MainPage = () => (
  <Grid container direction="column">
    <MainHeader />
    <Grid container>
      <Grid item xs={2}>
        <MainSideMenu />
      </Grid>
      <Grid item xs={10}>
        <MainContent />
      </Grid>
    </Grid>
  </Grid>
);

export default MainPage;
