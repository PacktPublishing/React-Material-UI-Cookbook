import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { default as MaterialRadioGroup } from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const options = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second', disabled: true },
  { label: 'Third', value: 'third' }
];

const styles = theme => ({});

const RadioGroup = ({ value, options, name, label, onChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <MaterialRadioGroup
      name={name}
      value={value}
      onChange={onChange}
      disabled
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={<Radio disabled={option.disabled} />}
          value={option.value}
          label={option.label}
        />
      ))}
    </MaterialRadioGroup>
  </FormControl>
);

export default withStyles(styles)(
  class AbstractingRadioButtonGroups extends Component {
    state = { value: 'first' };

    onChange = event => {
      this.setState({ value: event.target.value });
    };

    render() {
      return (
        <RadioGroup
          value={this.state.value}
          options={options}
          name="radio1"
          label="Pick One"
          onChange={this.onChange}
        />
      );
    }
  }
);
