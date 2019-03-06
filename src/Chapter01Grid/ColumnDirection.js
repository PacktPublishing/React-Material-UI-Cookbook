import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const ColumnDirection = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="space-around" spacing={4}>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>One</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Two</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Three</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Four</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Five</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>Six</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Seven</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography>Eight</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  </div>
));

export default ColumnDirection;
