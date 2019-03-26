import React, { Fragment, useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import CheckBox from '@material-ui/core/Checkbox';

const styles = theme => ({
  control: { margin: theme.spacing(2) }
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

export default function ReplacingCheckboxesWithSwitches() {
  const [values, setValues] = useState([
    { label: 'First', checked: false },
    { label: 'Second', checked: false },
    { label: 'Third', checked: false }
  ]);

  const onChange = index => ({ target: { checked } }) => {
    const newValues = [...values];
    const value = values[index];

    newValues[index] = { ...value, checked };
    setValues(newValues);
  };

  return (
    <Fragment>
      <SwitchGroup
        label="Switch Choices"
        values={values}
        onChange={onChange}
      />
      <SwitchGroup
        label="Checkbox Choices"
        values={values}
        onChange={onChange}
        checkbox
      />
    </Fragment>
  );
}
