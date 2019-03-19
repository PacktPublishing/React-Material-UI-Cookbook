import React, { Fragment } from 'react';

import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const styles = theme => ({
  button: { margin: theme.spacing(2) }
});

const hues = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
};

const UnderstandingThePallette = withStyles(styles)(
  ({
    primaryHue,
    primaryShade,
    secondaryHue,
    secondaryShade,
    errorHue,
    errorShade,
    classes
  }) => {
    const theme = createMuiTheme({
      palette: {
        primary: { main: hues[primaryHue][primaryShade] },
        secondary: { main: hues[secondaryHue][secondaryShade] },
        error: { main: hues[errorHue][errorShade] }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Button className={classes.button} variant="contained">
          Default
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Secondary
        </Button>
        <Typography className={classes.button} color="error">
          Error
        </Typography>
      </MuiThemeProvider>
    );
  }
);

export default UnderstandingThePallette;
