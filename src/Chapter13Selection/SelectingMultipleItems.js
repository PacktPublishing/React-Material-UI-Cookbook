import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';

const options = [
  { id: 1, label: 'First' },
  { id: 2, label: 'Second' },
  { id: 3, label: 'Third' },
  { id: 4, label: 'Fourth' },
  { id: 5, label: 'Fifth' }
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 100,
    maxWidth: 280
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
}));

function Selected({ selected }) {
  const classes = useStyles();

  return selected.map(value => (
    <Chip
      key={value}
      label={options.find(option => option.id === value).label}
      className={classes.chip}
    />
  ));
}

export default function SelectingMultipleItems() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const onChange = e => {
    setSelected(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="multi">Value</InputLabel>
      <Select
        multiple
        value={selected}
        onChange={onChange}
        input={<Input id="multi" />}
        renderValue={selected => <Selected selected={selected} />}
      >
        {options.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
