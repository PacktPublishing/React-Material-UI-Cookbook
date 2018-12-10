import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(
  class extends Component {
    state = { vertical: 'bottom', horizontal: 'left' };

    onVerticalChange = event => {
      this.setState({ vertical: event.target.value });
    };

    onHorizontalChange = event => {
      this.setState({ horizontal: event.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Vertical</FormLabel>
            <RadioGroup
              name="vertical"
              className={classes.group}
              value={this.state.vertical}
              onChange={this.onVerticalChange}
            >
              <FormControlLabel
                value="top"
                control={<Radio />}
                label="Top"
              />
              <FormControlLabel
                value="bottom"
                control={<Radio />}
                label="Bottom"
              />
            </RadioGroup>
          </FormControl>
          <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Horizontal</FormLabel>
            <RadioGroup
              name="horizontal"
              className={classes.group}
              value={this.state.horizontal}
              onChange={this.onHorizontalChange}
            >
              <FormControlLabel
                value="left"
                control={<Radio />}
                label="Left"
              />
              <FormControlLabel
                value="center"
                control={<Radio />}
                label="Center"
              />
              <FormControlLabel
                value="right"
                control={<Radio />}
                label="Right"
              />
            </RadioGroup>
          </FormControl>
          <Snackbar
            anchorOrigin={{
              vertical: this.state.vertical,
              horizontal: this.state.horizontal
            }}
            open={true}
            message="Positioned Snackbar"
          />
        </Fragment>
      );
    }
  }
);
