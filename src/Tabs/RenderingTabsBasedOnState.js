import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

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
      tabs: [
        {
          active: true,
          label: 'Home',
          content: 'Home Content',
          icon: <HomeIcon />
        },
        {
          active: false,
          label: 'Settings',
          content: 'Settings Content',
          icon: <SettingsIcon />
        },
        {
          active: false,
          disabled: true,
          label: 'Search',
          content: 'Search Content',
          icon: <SearchIcon />
        },
        {
          active: false,
          hidden: true,
          label: 'Add',
          content: 'AddContent',
          icon: <AddIcon />
        }
      ]
    };

    onChange = (e, value) => {
      this.setState(state => ({
        tabs: state.tabs
          .map(tab => ({ ...tab, active: false }))
          .map((tab, index) => ({
            ...tab,
            active: index === value
          }))
      }));
    };

    get active() {
      return this.state.tabs.findIndex(tab => tab.active);
    }

    get content() {
      return this.state.tabs[this.active].content;
    }

    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Tabs value={this.active} onChange={this.onChange}>
            {this.state.tabs
              .filter(tab => !tab.hidden)
              .map(tab => (
                <Tab
                  disabled={tab.disabled}
                  icon={tab.icon}
                  label={tab.label}
                />
              ))}
          </Tabs>
          <Typography component="div" className={classes.tabContent}>
            {this.content}
          </Typography>
        </div>
      );
    }
  }
);
