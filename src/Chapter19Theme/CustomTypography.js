import React, { Fragment } from 'react';
import 'typeface-exo';
import 'typeface-ubuntu';

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

const roboto = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
});

const exo = createMuiTheme({
  typography: {
    fontFamily: '"Exo", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

const ubuntu = createMuiTheme({
  typography: {
    fontFamily: '"Ubuntu", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

const CustomTypography = ({ themeFont }) => (
  <MuiThemeProvider theme={{ roboto, exo, ubuntu }[themeFont]}>
    <Dialog open={true}>
      <DialogTitle>Use Google's location service?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are
          running.
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
);

export default CustomTypography;
