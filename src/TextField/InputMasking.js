import React, { Fragment, Component } from 'react';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  input: { margin: theme.spacing.unit * 3 }
});

const PhoneInput = ({ inputRef, ...props }) => (
  <MaskedInput
    {...props}
    ref={inputRef}
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
    ref={inputRef}
    mask={emailMask}
    placeholderChar={'\u2000'}
  />
);

export default withStyles(styles)(
  class InputMasking extends Component {
    state = { phone: '', email: '' };

    onPhoneChange = e => {
      this.setState({ phone: e.target.value });
    };

    onEmailChange = e => {
      this.setState({ email: e.target.value });
    };

    render() {
      const { classes } = this.props;

      return (
        <Fragment>
          <TextField
            label="Phone"
            className={classes.input}
            value={this.state.phone}
            onChange={this.onPhoneChange}
            InputProps={{ inputComponent: PhoneInput }}
          />
          <TextField
            label="Email"
            className={classes.input}
            value={this.state.email}
            onChange={this.onEmailChange}
            InputProps={{ inputComponent: EmailInput }}
          />
        </Fragment>
      );
    }
  }
);
