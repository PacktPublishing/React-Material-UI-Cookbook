import React from 'react';

import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: 16
      },
      contained: {
        paddingTop: defaultTheme.spacing(2),
        paddingBottom: defaultTheme.spacing(2)
      },
      containedPrimary: {
        paddingLeft: defaultTheme.spacing(4),
        paddingRight: defaultTheme.spacing(4)
      }
    }
  }
});

const MovingStylesToThemes = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <Button>My Default Button</Button>
    <Button variant="contained">My Contained Button</Button>
    <Button variant="contained" color="primary">
      My Contained Primary Button
    </Button>
  </MuiThemeProvider>
);

export default MovingStylesToThemes;
