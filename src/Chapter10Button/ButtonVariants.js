import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    margin: theme.spacing(1)
  }
});

const ButtonVariants = withStyles(styles)(({ classes }) => (
  <Grid
    container
    direction="column"
    spacing={2}
    className={classes.container}
  >
    <Grid item>
      <Button variant="text">Text</Button>
    </Grid>
    <Grid item>
      <Button variant="outlined">Outlined</Button>
    </Grid>
    <Grid item>
      <Button variant="contained">Contained</Button>
    </Grid>
  </Grid>
));

export default ButtonVariants;
