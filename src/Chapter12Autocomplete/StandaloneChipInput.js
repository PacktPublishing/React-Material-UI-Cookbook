import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles(theme => ({
  chipInput: { minWidth: 300 }
}));

export default function StandaloneChipInput() {
  const classes = useStyles();
  const [values, setValues] = useState([]);

  const onAdd = chip => {
    setValues([...values, chip]);
  };

  const onDelete = (chip, index) => {
    setValues(values.slice(0, index).concat(values.slice(index + 1)));
  };

  return (
    <ChipInput
      className={classes.chipInput}
      helperText="Type name, hit enter to type another"
      value={values}
      onAdd={onAdd}
      onDelete={onDelete}
    />
  );
}
