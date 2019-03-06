import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: { margin: theme.spacing.unit * 2 }
});

const MyTextField = ({ isInvalid, ...props }) => {
  const invalid = isInvalid(props.value);

  return (
    <TextField
      {...props}
      error={invalid}
      helperText={invalid || props.helperText}
    />
  );
};

export default withStyles(styles)(
  class ValidationAndErrorDisplay extends Component {
    state = {
      inputs: [
        {
          id: 'phone',
          label: 'Phone',
          placeholder: '999-999-9999',
          value: '',
          helperText: 'Any valid phone number will do',
          isInvalid: value =>
            value === '' ||
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
              value
            )
              ? false
              : 'Woops. Not a valid phone number'
        },
        {
          id: 'email',
          label: 'Email',
          placeholder: 'john@acme.com',
          value: '',
          helperText: 'Any valid email address will do',
          isInvalid: value =>
            value === '' || /\S+@\S+\.\S+/.test(value)
              ? false
              : 'Woops. Not a valid email address'
        }
      ]
    };

    onChange = ({ target: { id, value } }) => {
      this.setState(state => {
        const inputs = [...state.inputs];
        const index = state.inputs.findIndex(
          input => input.id === id
        );

        inputs[index] = {
          ...inputs[index],
          value: value
        };

        return { inputs };
      });
    };

    render() {
      const { classes } = this.props;

      return (
        <Grid container spacing={16} className={classes.container}>
          {this.state.inputs.map(input => (
            <Grid item key={input.id}>
              <MyTextField {...input} onChange={this.onChange} />
            </Grid>
          ))}
        </Grid>
      );
    }
  }
);
