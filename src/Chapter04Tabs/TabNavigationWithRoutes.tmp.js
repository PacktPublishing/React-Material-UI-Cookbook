import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing(2)
  }
});

function TabNavigationWithRoutes({ classes }) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={onChange}>
          <Tab label="Item One" component={Link} to="/" />
          <Tab label="Item Two" component={Link} to="/page2" />
          <Tab label="Item Three" component={Link} to="/page3" />
        </Tabs>
      </AppBar>
      <Route
        exact
        path="/"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            Item One
          </Typography>
        )}
      />
      <Route
        exact
        path="/page2"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            Item Two
          </Typography>
        )}
      />
      <Route
        exact
        path="/page3"
        render={() => (
          <Typography component="div" className={classes.tabContent}>
            Item Three
          </Typography>
        )}
      />
    </div>
  );
}

export default withStyles(styles)(TabNavigationWithRoutes);
