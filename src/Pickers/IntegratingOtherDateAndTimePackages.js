import React, { Component } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from 'material-ui-pickers';

const styles = theme => ({
  grid: {
    width: '65%'
  }
});

export default withStyles(styles)(
  class IntegratingWithOtherDateAndTimePackages extends Component {
    state = {
      datetime: new Date()
    };

    onChange = datetime => {
      this.setState({ datetime });
    };

    render() {
      const { classes } = this.props;

      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            className={classes.grid}
            justify="space-around"
          >
            <DatePicker
              margin="normal"
              label="Date picker"
              value={this.state.datetime}
              onChange={this.onChange}
            />
            <TimePicker
              margin="normal"
              label="Time picker"
              value={this.state.datetime}
              onChange={this.onChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      );
    }
  }
);
