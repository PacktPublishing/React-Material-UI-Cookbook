import React, { Fragment, useState } from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  input: { margin: theme.spacing(3) }
}));

const PhoneInput = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={[
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]}
    placeholderChar={'\u2000'}
  />
);

const EmailInput = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={ref => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={emailMask}
    placeholderChar={'\u2000'}
  />
);

export default function InputMasking() {
  const classes = useStyles();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Fragment>
      <TextField
        label="Phone"
        className={classes.input}
        value={phone}
        onChange={e => setPhone(e.target.value)}
        InputProps={{ inputComponent: PhoneInput }}
      />
      <TextField
        label="Email"
        className={classes.input}
        value={email}
        onChange={e => setEmail(e.target.value)}
        InputProps={{ inputComponent: EmailInput }}
      />
    </Fragment>
  );
}
