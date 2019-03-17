import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function ConfirmingActions() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button color="primary" onClick={() => setOpen(true)}>
        Show Alert
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <Grid container>
            <Grid item xs={2}>
              <WarningIcon fontSize="large" color="secondary" />
            </Grid>
            <Grid item xs={10}>
              <DialogContentText>
                Disk space critically low. You won't be able to
                perform any actions until you free up some space by
                deleting assets.
              </DialogContentText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="primary"
          >
            Got It
            <CheckIcon className={classes.rightIcon} />
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
