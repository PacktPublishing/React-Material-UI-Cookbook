import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = { open: false };

    showSnackbar = () => {
      this.setState({ open: true });
    };

    hideSnackbar = () => {
      this.setState({ open: false });
    };

    render() {
      return (
        <Fragment>
          <Button variant="contained" onClick={this.showSnackbar}>
            Show Snackbar
          </Button>
          <Snackbar
            open={this.state.open}
            onClose={this.hideSnackbar}
            autoHideDuration={5000}
            message="Visible Snackbar!"
          />
        </Fragment>
      );
    }
  }
);
