import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

export default withStyles(styles)(
  class ConfirmingActions extends Component {
    state = { open: false };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <Button
            color="primary"
            onClick={() => {
              this.setState({ open: true });
            }}
          >
            Show Alert
          </Button>
          <Dialog open={this.state.open}>
            <DialogContent>
              <Grid container>
                <Grid item xs={2}>
                  <WarningIcon fontSize="large" color="secondary" />
                </Grid>
                <Grid item xs={10}>
                  <DialogContentText>
                    Disk space critically low. You won't be able to
                    perform any actions until you free up some space
                    by deleting assets.
                  </DialogContentText>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                onClick={() => {
                  this.setState({ open: false });
                }}
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
  }
);
