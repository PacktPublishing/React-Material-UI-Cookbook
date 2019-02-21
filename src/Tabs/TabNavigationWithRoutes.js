import React, { Fragment } from 'react';
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

const TabContainer = ({ value }) => (
  <AppBar position="static">
    <Tabs value={value}>
      <Tab label="Item One" component={Link} to="/" />
      <Tab label="Item Two" component={Link} to="/page2" />
      <Tab label="Item Three" component={Link} to="/page3" />
    </Tabs>
  </AppBar>
);

const TabNavigationWithRoutes = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Route
      exact
      path="/"
      render={() => (
        <Fragment>
          <TabContainer value={0} />
          <Typography component="div" className={classes.tabContent}>
            Item One
          </Typography>
        </Fragment>
      )}
    />
    <Route
      exact
      path="/page2"
      render={() => (
        <Fragment>
          <TabContainer value={1} />
          <Typography component="div" className={classes.tabContent}>
            Item Two
          </Typography>
        </Fragment>
      )}
    />
    <Route
      exact
      path="/page3"
      render={() => (
        <Fragment>
          <TabContainer value={2} />
          <Typography component="div" className={classes.tabContent}>
            Item Three
          </Typography>
        </Fragment>
      )}
    />
  </div>
));

export default TabNavigationWithRoutes;
