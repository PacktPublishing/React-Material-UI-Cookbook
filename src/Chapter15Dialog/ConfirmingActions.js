import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

export default function ConfirmingActions() {
  const [open, setOpen] = useState(false);

  const onShowConfirm = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button color="primary" onClick={onShowConfirm}>
        Confirm Action
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>Confirm Delete Asset</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the asset? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onConfirm}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
