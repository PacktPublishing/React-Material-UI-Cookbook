import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

const styles = theme => ({
  chipInput: { minWidth: 300 }
});

export default withStyles(styles)(
  class StandaloneChipInput extends Component {
    state = { values: [] };

    onAdd = chip => {
      this.setState(state => ({ values: [...state.values, chip] }));
    };

    onDelete = (chip, index) => {
      this.setState(state => ({
        values: state.values
          .slice(0, index)
          .concat(state.values.slice(index + 1))
      }));
    };

    render() {
      const { classes } = this.props;

      return (
        <ChipInput
          className={classes.chipInput}
          helperText="Type name, hit enter to type another"
          value={this.state.value}
          onRequestAdd={this.onAdd}
          onRequestDelete={this.onDelete}
        />
      );
    }
  }
);
