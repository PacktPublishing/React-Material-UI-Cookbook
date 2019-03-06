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
        paddingTop: defaultTheme.spacing.unit * 2,
        paddingBottom: defaultTheme.spacing.unit * 2
      },
      containedPrimary: {
        paddingLeft: defaultTheme.spacing.unit * 4,
        paddingRight: defaultTheme.spacing.unit * 4
      }
    }
  },
  typography: {
    useNextVariants: true
  }
});

const ScopedComponentStyles = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <Button>My Default Button</Button>
    <Button variant="contained">My Contained Button</Button>
    <Button variant="contained" color="primary">
      My Contained Primary Button
    </Button>
  </MuiThemeProvider>
);

export default ScopedComponentStyles;
