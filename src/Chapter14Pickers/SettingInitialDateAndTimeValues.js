import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: { margin: theme.spacing.unit }
}));

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [
    year,
    month < 10 ? `0${month}` : month,
    day < 10 ? `0${day}` : day
  ].join('-');
}

function formatTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return [
    hours < 10 ? `0${hours}` : hours,
    minutes < 10 ? `0${minutes}` : minutes
  ].join(':');
}

const DatePicker = ({ date, ...props }) => (
  <TextField
    value={date instanceof Date ? formatDate(date) : date}
    type="date"
    InputLabelProps={{
      shrink: true
    }}
    {...props}
  />
);

const TimePicker = ({ time, ...props }) => (
  <TextField
    value={time instanceof Date ? formatTime(time) : time}
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

export default function SettingInitialDateAndTimeValues() {
  const classes = useStyles();
  const [datetime, setDatetime] = useState(new Date());

  const onChangeDate = e => {
    if (!e.target.value) {
      return;
    }

    const [year, month, day] = e.target.value
      .split('-')
      .map(n => Number(n));

    const newDatetime = new Date(datetime);
    newDatetime.setYear(year);
    newDatetime.setMonth(month - 1);
    newDatetime.setDate(day);

    setDatetime(newDatetime);
  };

  const onChangeTime = e => {
    const [hours, minutes] = e.target.value
      .split(':')
      .map(n => Number(n));

    const newDatetime = new Date(datetime);
    newDatetime.setHours(hours);
    newDatetime.setMinutes(minutes);

    setDatetime(newDatetime);
  };

  return (
    <Fragment>
      <DatePicker
        date={datetime}
        onChange={onChangeDate}
        label="My Date"
        className={classes.textField}
      />
      <TimePicker
        time={datetime}
        onChange={onChangeTime}
        label="My Time"
        className={classes.textField}
      />
    </Fragment>
  );
}
