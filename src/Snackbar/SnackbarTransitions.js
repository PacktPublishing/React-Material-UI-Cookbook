import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

const MySnackbar = ({ transition, direction, ...rest }) => (
  <Snackbar
    TransitionComponent={
      { slide: Slide, grow: Grow, fade: Fade }[transition]
    }
    TransitionProps={{ direction }}
    {...rest}
  />
);

const styles = {};

export default withStyles(styles)(
  class extends Component {
    state = {
      first: false,
      second: false,
      third: false,
      fourth: false
    };

    showSnackbar = name => () => {
      this.setState({ [name]: true });
    };

    hideSnackbar = name => () => {
      this.setState({ [name]: false });
    };

    render() {
      return (
        <Fragment>
          <Grid container spacing={8}>
            <Grid item>
              <Button
                variant="contained"
                onClick={this.showSnackbar('first')}
              >
                Slide Down
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={this.showSnackbar('second')}
              >
                Slide Up
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={this.showSnackbar('third')}
              >
                Grow
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={this.showSnackbar('fourth')}
              >
                Fade
              </Button>
            </Grid>
          </Grid>
          <MySnackbar
            open={this.state.first}
            onClose={this.hideSnackbar('first')}
            autoHideDuration={5000}
            message="Slide Down"
            transition="slide"
            direction="down"
          />
          <MySnackbar
            open={this.state.second}
            onClose={this.hideSnackbar('second')}
            autoHideDuration={5000}
            message="Slide Up"
            transition="slide"
            direction="up"
          />
          <MySnackbar
            open={this.state.third}
            onClose={this.hideSnackbar('third')}
            autoHideDuration={5000}
            message="Grow"
            transition="grow"
          />
          <MySnackbar
            open={this.state.fourth}
            onClose={this.hideSnackbar('fourth')}
            autoHideDuration={5000}
            message="Fade"
            transition="fade"
          />
        </Fragment>
      );
    }
  }
);
