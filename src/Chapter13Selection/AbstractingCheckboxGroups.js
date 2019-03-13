import React, { useState, Fragment } from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const CheckboxGroup = ({ values, label, onChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <FormGroup>
      {values.map((value, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
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

export default function AbstractingCheckboxGroups() {
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
      <CheckboxGroup
        label="Choices"
        values={values}
        onChange={onChange}
      />
      <Typography variant="h6">Selection</Typography>
      <List>
        {values
          .filter(value => value.checked)
          .map((value, index) => (
            <ListItem key={index}>
              <ListItemText>{value.label}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Fragment>
  );
}
