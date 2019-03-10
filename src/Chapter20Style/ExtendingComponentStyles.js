import React, { Fragment } from 'react';
import { JssProvider, jss } from 'react-jss';

import {
  withStyles,
  createGenerateClassName
} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2
  },
  contained: {
    extend: 'root',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  containedPrimary: {
    extend: 'contained',
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4
  }
});

const App = ({ children }) => (
  <JssProvider
    jss={jss}
    generateClassName={createGenerateClassName()}
  >
    {children}
  </JssProvider>
);

const Buttons = withStyles(styles)(({ classes }) => (
  <Fragment>
    <Button className={classes.root}>My Default Button</Button>
    <Button className={classes.contained} variant="contained">
      My Contained Button
    </Button>
    <Button
      className={classes.containedPrimary}
      variant="contained"
      color="primary"
    >
      My Contained Primary Button
    </Button>
  </Fragment>
));

const ScopedComponentStyles = () => (
  <App>
    <Buttons />
  </App>
);

export default ScopedComponentStyles;
