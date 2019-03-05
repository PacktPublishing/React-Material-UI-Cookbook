import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function PositioningSnackbars() {
  const classes = useStyles();
  const [vertical, setVertical] = useState('bottom');
  const [horizontal, setHorizontal] = useState('left');

  const onVerticalChange = event => {
    setVertical(event.target.value);
  };

  const onHorizontalChange = event => {
    setHorizontal(event.target.value);
  };

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
          value={vertical}
          onChange={onVerticalChange}
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
          value={horizontal}
          onChange={onHorizontalChange}
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
          vertical,
          horizontal
        }}
        open={true}
        message="Positioned Snackbar"
      />
    </Fragment>
  );
}
