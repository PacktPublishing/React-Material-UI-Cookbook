import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: theme.spacing(2)
  },
  contained: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  containedPrimary: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
});

const ScopedComponentStyles = withStyles(styles)(({ classes }) => (
  <Fragment>
    <Button classes={classes}>My Default Button</Button>
    <Button classes={classes} variant="contained">
      My Contained Button
    </Button>
    <Button classes={classes} variant="contained" color="primary">
      My Contained Primary Button
    </Button>
  </Fragment>
));

export default ScopedComponentStyles;
