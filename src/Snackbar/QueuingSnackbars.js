import React, { Fragment, Component } from 'react';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({});

const withMessage = Wrapped =>
  class WithMessage extends Component {
    queue = [];
    state = { open: false, message: '' };

    message = message => {
      this.queue.push(message);
      if (this.queue.length === 1) {
        this.setState({ open: true, message });
      }
    };

    onClose = () => {
      this.setState({ open: false });
    };

    onExit = () => {
      const [message, ...rest] = this.queue;

      if (message) {
        this.queue = rest;
        this.setState({ open: true, message });
      }
    };

    render() {
      return (
        <Fragment>
          <Wrapped message={this.message} {...this.props} />
          <Snackbar
            key={this.state.message}
            open={this.state.open}
            message={this.state.message}
            autoHideDuration={4000}
            onClose={this.onClose}
            onExit={this.onExit}
          />
        </Fragment>
      );
    }
  };

export default compose(
  withStyles(styles),
  withMessage
)(
  class extends Component {
    counter = 0;

    onClick = () => {
      this.counter += 1;
      this.props.message(`Message ${this.counter}`);
    };

    render() {
      return <Button onClick={this.onClick}>Message</Button>;
    }
  }
);
