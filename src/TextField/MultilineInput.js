import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({});

export default withStyles(styles)(
  class MultilineInput extends Component {
    state = { multiline: '' };

    onChange = e => {
      this.setState({ multiline: e.target.value });
    };

    render() {
      return (
        <TextField
          multiline
          rows={5}
          label="Address"
          value={this.state.multiline}
          onChange={this.onChange}
        />
      );
    }
  }
);
