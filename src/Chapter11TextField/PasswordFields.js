import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: { margin: theme.spacing(2) }
}));

export default function PasswordFields() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item>
        <TextField
          id="username"
          label="Username"
          autoComplete="username"
          InputProps={{ name: 'username' }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="password"
          type="password"
          label="Password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
