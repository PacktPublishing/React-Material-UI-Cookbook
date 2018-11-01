import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      value: 0
    };

    onChange = (e, value) => {
      this.setState({ value });
    };

    render() {
      const { classes } = this.props;
      const { value } = this.state;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.onChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <Typography
              component="div"
              className={classes.tabContent}
            >
              Item One
            </Typography>
          )}
          {value === 1 && (
            <Typography
              component="div"
              className={classes.tabContent}
            >
              Item Two
            </Typography>
          )}
          {value === 2 && (
            <Typography
              component="div"
              className={classes.tabContent}
            >
              Item Three
            </Typography>
          )}
        </div>
      );
    }
  }
);
