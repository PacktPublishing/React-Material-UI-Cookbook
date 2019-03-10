import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: { margin: theme.spacing(2) }
});

const PlaceholderAndHelperText = withStyles(styles)(({ classes }) => (
  <Grid container spacing={4} className={classes.container}>
    <Grid item>
      <TextField label="The Value" />
    </Grid>
    <Grid item>
      <TextField placeholder="Example Value" />
    </Grid>
    <Grid item>
      <TextField helperText="Brief explanation of the value" />
    </Grid>
    <Grid item>
      <TextField
        label="The Value"
        placeholder="Example Value"
        helperText="Brief explanation of the value"
      />
    </Grid>
  </Grid>
));

export default PlaceholderAndHelperText;
