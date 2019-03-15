import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from 'material-ui-pickers';

const useStyles = makeStyles(theme => ({
  grid: {
    width: '65%'
  }
}));

export default function IntegratingWithOtherDateAndTimePackages() {
  const classes = useStyles();
  const [datetime, setDatetime] = useState(new Date());

  const onChange = datetime => {
    setDatetime(datetime);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.grid} justify="space-around">
        <DatePicker
          margin="normal"
          label="Date picker"
          value={datetime}
          onChange={onChange}
        />
        <TimePicker
          margin="normal"
          label="Time picker"
          value={datetime}
          onChange={onChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
