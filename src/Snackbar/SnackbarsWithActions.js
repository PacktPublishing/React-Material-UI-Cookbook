import React, { Fragment, Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

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
          <Route
            exact
            path="/"
            render={() => (
              <Button onClick={this.showSnackbar}>
                create thing
              </Button>
            )}
          />
          <Route
            exact
            path="/thing"
            render={() => <Typography>The Thing</Typography>}
          />
          <Snackbar
            open={this.state.open}
            onClose={this.hideSnackbar}
            message="Finished creating thing"
            action={[
              <Button
                color="secondary"
                component={Link}
                to="/thing"
                onClick={this.hideSnackbar}
              >
                The Thing
              </Button>,
              <IconButton color="inherit" onClick={this.hideSnackbar}>
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Fragment>
      );
    }
  }
);
