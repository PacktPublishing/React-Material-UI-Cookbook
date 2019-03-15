import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: { margin: theme.spacing(1) }
}));

const TimePicker = ({ time, ...props }) => (
  <TextField
    value={time}
    type="time"
    InputLabelProps={{
      shrink: true
    }}
    inputProps={{
      step: 300
    }}
    {...props}
  />
);

export default function UsingTimePickers() {
  const classes = useStyles();
  const [time, setTime] = useState('');

  const onChange = e => {
    setTime(e.target.value);
  };

  return (
    <Fragment>
      <TimePicker
        time={time}
        onChange={onChange}
        label="My Time"
        className={classes.textField}
      />
      <TextField
        value={time}
        label="Updated Time Value"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{ readOnly: true }}
      />
    </Fragment>
  );
}
