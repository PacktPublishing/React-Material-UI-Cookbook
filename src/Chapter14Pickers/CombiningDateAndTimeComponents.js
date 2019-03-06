import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: { margin: theme.spacing.unit }
});

const formatDate = date =>
  date
    .toISOString()
    .split(':')
    .slice(0, 2)
    .join(':');

const DateTimePicker = ({ date, ...props }) => (
  <TextField
    value={
      date instanceof Date
        ? date.toISOString().replace('Z', '')
        : date
    }
    type="datetime-local"
    InputLabelProps={{
      shrink: true
    }}
    {...props}
  />
);

export default withStyles(styles)(
  class CombiningDateAndTimeComponents extends Component {
    state = { datetime: new Date() };

    onChangeDate = e => {
      this.setState({ datetime: new Date(`${e.target.value}Z`) });
    };

    render() {
      const { classes } = this.props;

      return (
        <DateTimePicker
          date={formatDate(this.state.datetime)}
          onChange={this.onChangeDate}
          label="My Date/Time"
          className={classes.textField}
        />
      );
    }
  }
);
