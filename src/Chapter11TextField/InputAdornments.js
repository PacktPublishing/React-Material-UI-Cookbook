import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

const styles = theme => ({
  container: { margin: theme.spacing.unit * 2 }
});

class PasswordField extends Component {
  state = { visible: false };

  toggleVisibility = () => {
    this.setState(state => ({ visible: !state.visible }));
  };

  render() {
    return (
      <TextField
        {...this.props}
        type={this.state.visible ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={this.toggleVisibility}>
                {this.state.visible ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
}

const ValidationField = props => {
  const isEmpty = props.value === '';
  const isValid = props.isValid(props.value);
  let startAdornment;

  if (isEmpty) {
    startAdornment = null;
  } else if (isValid) {
    startAdornment = (
      <InputAdornment position="start">
        <CheckCircleIcon color="primary" />
      </InputAdornment>
    );
  } else {
    startAdornment = (
      <InputAdornment position="start">
        <ErrorIcon color="error" />
      </InputAdornment>
    );
  }

  return (
    <TextField
      {...props}
      error={!isEmpty && !isValid}
      InputProps={{ startAdornment }}
    />
  );
};

export default withStyles(styles)(
  class InputAdornments extends Component {
    state = { password: '', email: '' };

    onPasswordChange = e => {
      this.setState({ password: e.target.value });
    };

    onEmailChange = e => {
      this.setState({ email: e.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Grid container spacing={16} className={classes.container}>
          <Grid item>
            <PasswordField
              label="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </Grid>
          <Grid item>
            <ValidationField
              label="Email"
              value={this.state.email}
              onChange={this.onEmailChange}
              isValid={v => /\S+@\S+\.\S+/.test(v)}
            />
          </Grid>
        </Grid>
      );
    }
  }
);
