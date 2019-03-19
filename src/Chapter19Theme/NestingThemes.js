import React from 'react';

import {
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';

const Blue = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: pink,
    error: { main: red[600] }
  }
});

const Rounded = theme =>
  createMuiTheme({
    ...theme,
    shape: {
      borderRadius: 8
    }
  });

const NestingThemes = () => (
  <MuiThemeProvider theme={Blue}>
    <MuiThemeProvider theme={Rounded}>
      <Dialog open={true}>
        <DialogTitle>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means
            sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary">Disagree</Button>
          <Button variant="contained" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </MuiThemeProvider>
  </MuiThemeProvider>
);

export default NestingThemes;
