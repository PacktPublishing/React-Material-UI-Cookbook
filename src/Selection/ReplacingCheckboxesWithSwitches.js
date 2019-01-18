import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import CheckBox from '@material-ui/core/Checkbox';

const styles = theme => ({
  control: { margin: theme.spacing.unit * 2 }
});

const SwitchGroup = withStyles(styles)(
  ({ values, label, onChange, checkbox, classes }) => {
    const Control = checkbox ? CheckBox : Switch;

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          {values.map((value, index) => (
            <FormControlLabel
              className={classes.control}
              key={index}
              control={
                <Control
                  checked={value.checked}
                  onChange={onChange(index)}
                />
              }
              label={value.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    );
  }
);

export default withStyles(styles)(
  class ReplacingCheckboxesWithSwitches extends Component {
    state = {
      values: [
        { label: 'First', checked: false },
        { label: 'Second', checked: false },
        { label: 'Third', checked: false }
      ]
    };

    onChange = index => ({ target: { checked } }) => {
      this.setState(state => {
        const values = [...state.values];
        const value = values[index];

        values[index] = { ...value, checked };

        return { values };
      });
    };

    render() {
      return (
        <Fragment>
          <SwitchGroup
            label="Switch Choices"
            values={this.state.values}
            onChange={this.onChange}
          />
          <SwitchGroup
            label="Checkbox Choices"
            values={this.state.values}
            onChange={this.onChange}
            checkbox
          />
        </Fragment>
      );
    }
  }
);
