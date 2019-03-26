import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: { margin: theme.spacing(2) }
}));

const MyTextField = ({ isInvalid, ...props }) => {
  const invalid = isInvalid(props.value);

  return (
    <TextField
      {...props}
      error={Boolean(invalid)}
      helperText={invalid || props.helperText}
    />
  );
};

export default function ValidationAndErrorDisplay() {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    {
      id: 'phone',
      label: 'Phone',
      placeholder: '999-999-9999',
      value: '',
      helperText: 'Any valid phone number will do',
      isInvalid: value =>
        value === '' ||
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
          value
        )
          ? false
          : 'Woops. Not a valid phone number'
    },
    {
      id: 'email',
      label: 'Email',
      placeholder: 'john@acme.com',
      value: '',
      helperText: 'Any valid email address will do',
      isInvalid: value =>
        value === '' || /\S+@\S+\.\S+/.test(value)
          ? false
          : 'Woops. Not a valid email address'
    }
  ]);

  const onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex(input => input.id === id);

    newInputs[index] = {
      ...inputs[index],
      value: value
    };

    setInputs(newInputs);
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {inputs.map(input => (
        <Grid item key={input.id}>
          <MyTextField {...input} onChange={onChange} />
        </Grid>
      ))}
    </Grid>
  );
}
