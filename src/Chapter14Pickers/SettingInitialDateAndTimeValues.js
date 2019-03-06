import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: { margin: theme.spacing.unit }
});

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

export default withStyles(styles)(
  class SettingInitialDateAndTimeValues extends Component {
    state = { datetime: new Date() };

    onChangeDate = e => {
      if (!e.target.value) {
        return;
      }

      const [year, month, day] = e.target.value
        .split('-')
        .map(n => Number(n));

      const datetime = new Date(this.state.datetime);
      datetime.setYear(year);
      datetime.setMonth(month - 1);
      datetime.setDate(day);

      this.setState({ datetime });
    };

    onChangeTime = e => {
      const [hours, minutes] = e.target.value
        .split(':')
        .map(n => Number(n));

      console.log(e.target.value);

      const datetime = new Date(this.state.datetime);
      datetime.setHours(hours);
      datetime.setMinutes(minutes);

      this.setState({ datetime });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <DatePicker
            date={this.state.datetime}
            onChange={this.onChangeDate}
            label="My Date"
            className={classes.textField}
          />
          <TimePicker
            time={this.state.datetime}
            onChange={this.onChangeTime}
            label="My Time"
            className={classes.textField}
          />
        </Fragment>
      );
    }
  }
);
