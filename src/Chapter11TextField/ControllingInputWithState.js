import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: { margin: theme.spacing.unit * 2 }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      inputs: [
        { id: 'first', label: 'First', value: '' },
        { id: 'second', label: 'Second', value: '' },
        { id: 'third', label: 'Third', value: '' }
      ]
    };

    onChange = ({ target: { id, value } }) => {
      this.setState(state => {
        const inputs = [...state.inputs];
        const index = state.inputs.findIndex(
          input => input.id === id
        );

        inputs[index] = { ...inputs[index], value: value };

        return { inputs };
      });
    };

    render() {
      const { classes } = this.props;

      return (
        <Grid container spacing={16} className={classes.container}>
          {this.state.inputs.map(input => (
            <Grid item key={input.id}>
              <TextField
                id={input.id}
                label={input.label}
                value={input.value}
                onChange={this.onChange}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
  }
);
