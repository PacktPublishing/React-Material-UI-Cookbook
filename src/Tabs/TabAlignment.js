import React, { Component } from 'react';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

export default compose(
  withWidth(),
  withStyles(styles)
)(
  class extends Component {
    state = {
      value: 0
    };

    onChange = (e, value) => {
      this.setState({ value });
    };

    get fullWidth() {
      return !['xs', 'sm'].includes(this.props.width);
    }

    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.onChange}
            fullWidth={this.fullWidth}
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
      );
    }
  }
);
