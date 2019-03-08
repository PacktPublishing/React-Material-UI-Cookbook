import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  container: {
    margin: theme.spacing(1)
  }
});

function buttonColor(parentColor) {
  if (parentColor === 'primary') {
    return 'secondary';
  }

  if (parentColor === 'secondary') {
    return 'primary';
  }

  return 'default';
}

const ButtonEmphasis = withStyles(styles)(
  ({ classes, disabled, appBarColor }) => (
    <Grid
      container
      direction="column"
      spacing={5}
      className={classes.container}
    >
      <Grid item>
        <AppBar color={appBarColor}>
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="text"
                  disabled={disabled}
                  color="inherit"
                >
                  Text
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  disabled={disabled}
                  color="inherit"
                >
                  Outlined
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  disabled={disabled}
                  color={buttonColor(appBarColor)}
                >
                  Contained
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item>
        <Typography variant="h6">Default</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="text" disabled={disabled}>
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" disabled={disabled}>
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled={disabled}>
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Primary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="text"
              color="primary"
              disabled={disabled}
            >
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              disabled={disabled}
            >
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={disabled}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h6">Secondary</Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="text"
              color="secondary"
              disabled={disabled}
            >
              Text
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              disabled={disabled}
            >
              Outlined
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              disabled={disabled}
            >
              Contained
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
);

export default ButtonEmphasis;
