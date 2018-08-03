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
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="space-around" spacing={24}>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography>One</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Two</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <Paper className={classes.paper}>Three</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Four</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="column" spacing={16}>
          <Grid item>
            <Paper className={classes.paper}>Five</Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>Six</Paper>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid item xs={3}>
          <Grid container direction="column" spacing={16}>
            <Grid item>
              <Paper className={classes.paper}>Seven</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>Eight</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  </div>
));
