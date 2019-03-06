import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

export default class CollectingFormInput extends Component {
  state = {
    dialogOpen: false,
    snackbarOpen: false,
    snackbarMessage: '',
    first: '',
    last: '',
    email: ''
  };

  onDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };

  onDialogClose = () => {
    this.setState({
      dialogOpen: false,
      first: '',
      last: '',
      email: ''
    });
  };

  onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarOpen: false, snackbarMessage: '' });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCreate = () => {
    this.setState({
      snackbarOpen: true,
      snackbarMessage: `${this.state.first} ${
        this.state.last
      } created`
    });
    this.onDialogClose();
  };

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.onDialogOpen}>
          New User
        </Button>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.onDialogClose}
        >
          <DialogTitle>New User</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="normal"
              label="First Name"
              InputProps={{ name: 'first' }}
              onChange={this.onChange}
              value={this.state.first}
              fullWidth
            />
            <TextField
              margin="normal"
              label="Last Name"
              InputProps={{ name: 'last' }}
              onChange={this.onChange}
              value={this.state.last}
              fullWidth
            />
            <TextField
              margin="normal"
              label="Email Address"
              type="email"
              InputProps={{ name: 'email' }}
              onChange={this.onChange}
              value={this.state.email}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onDialogClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={this.onCreate}
              color="primary"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          onClose={this.onSnackbarClose}
          autoHideDuration={4000}
        />
      </Fragment>
    );
  }
}
