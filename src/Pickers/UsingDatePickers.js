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

export default withStyles(styles)(
  class UsingDatePickers extends Component {
    state = { date: '' };

    onChange = e => {
      this.setState({ date: new Date(`${e.target.value}T00:00:00`) });
    };

    render() {
      const { classes } = this.props;
      const dateFormatted = this.state.date
        ? this.state.date.toLocaleDateString()
        : '';

      return (
        <Fragment>
          <DatePicker
            date={this.state.date}
            onChange={this.onChange}
            label="My Date"
            className={classes.textField}
          />
          <TextField
            value={dateFormatted}
            label="Updated Date Value"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{ readOnly: true }}
          />
        </Fragment>
      );
    }
  }
);
