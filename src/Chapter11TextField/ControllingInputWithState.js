import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  container: { margin: theme.spacing(2) }
}));

export default function ControllingInputWithState() {
  const classes = useStyles();
  const [inputs, setInputs] = useState([
    { id: 'first', label: 'First', value: '' },
    { id: 'second', label: 'Second', value: '' },
    { id: 'third', label: 'Third', value: '' }
  ]);

  const onChange = ({ target: { id, value } }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex(input => input.id === id);

    newInputs[index] = { ...inputs[index], value };

    setInputs(newInputs);
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      {inputs.map(input => (
        <Grid item key={input.id}>
          <TextField
            id={input.id}
            label={input.label}
            value={input.value}
            onChange={onChange}
          />
        </Grid>
      ))}
    </Grid>
  );
}
