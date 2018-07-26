import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MainSideMenu = () => (
  <List component="nav">
    <ListItem>
      <ListItemText inset disableTypography>
        <Link to="/demo/1">Demo 1</Link>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText inset disableTypography>
        <Link to="/demo/2">Demo 2</Link>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText inset disableTypography>
        <Link to="/demo/3">Demo 3</Link>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText inset disableTypography>
        <Link to="/demo/4">Demo 4</Link>
      </ListItemText>
    </ListItem>
    <ListItem>
      <ListItemText inset disableTypography>
        <Link to="/demo/wrapper">Wrapper Demo</Link>
      </ListItemText>
    </ListItem>
  </List>
);

export default MainSideMenu;
