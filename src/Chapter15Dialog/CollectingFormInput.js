import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

export default function CollectingFormInput() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');

  const onDialogOpen = () => {
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
    setFirst('');
    setLast('');
    setEmail('');
  };

  const onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  const onCreate = () => {
    setSnackbarOpen(true);
    setSnackbarMessage(`${first} ${last} created`);
    onDialogClose();
  };

  return (
    <Fragment>
      <Button color="primary" onClick={onDialogOpen}>
        New User
      </Button>
      <Dialog open={dialogOpen} onClose={onDialogClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="First Name"
            InputProps={{ name: 'first' }}
            onChange={e => setFirst(e.target.value)}
            value={first}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Last Name"
            InputProps={{ name: 'last' }}
            onChange={e => setLast(e.target.value)}
            value={last}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Email Address"
            type="email"
            InputProps={{ name: 'email' }}
            onChange={e => setEmail(e.target.value)}
            value={email}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onCreate}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={onSnackbarClose}
        autoHideDuration={4000}
      />
    </Fragment>
  );
}
