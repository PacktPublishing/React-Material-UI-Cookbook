import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

export default withStyles(styles)(
  class PasswordFields extends Component {
    state = { username: '', password: '' };

    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Grid container spacing={16} className={classes.container}>
          <Grid item>
            <TextField
              id="username"
              label="Username"
              autoComplete="username"
              InputProps={{ name: 'username' }}
              value={this.state.username}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Grid>
        </Grid>
      );
    }
  }
);
