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

const theme = createMuiTheme({
  overrides: {
    MuiDialogTitle: { root: { textAlign: 'center' } },
    MuiDialogActions: { root: { justifyContent: 'center' } }
  }
});

const ComponentThemeSettings = () => (
  <MuiThemeProvider theme={theme}>
    <Dialog open={true}>
      <DialogTitle>Use Google's location service?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending
          anonymous location data to Google, even when no apps are
          running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary">Disagree</Button>
        <Button color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </MuiThemeProvider>
);

export default ComponentThemeSettings;
