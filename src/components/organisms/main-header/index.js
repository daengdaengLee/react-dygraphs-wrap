import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  colorDefault: {
    color: '#ffffff',
    backgroundColor: '#2196f3',
  },
};

const MainHeader = ({ classes }) => (
  <AppBar position="static" className={classes.colorDefault}>
    <Toolbar>
      <Typography color="inherit" variant="headline">
        React Wrapper for Dygraphs
      </Typography>
    </Toolbar>
  </AppBar>
);

MainHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainHeader);
