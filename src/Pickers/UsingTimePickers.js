import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: { margin: theme.spacing.unit }
});

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

export default withStyles(styles)(
  class UsingTimePickers extends Component {
    state = { time: '' };

    onChange = e => {
      this.setState({ time: e.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <TimePicker
            time={this.state.time}
            onChange={this.onChange}
            label="My Time"
            className={classes.textField}
          />
          <TextField
            value={this.state.time}
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
  }
);
