import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabContent: {
    padding: theme.spacing(2)
  }
}));

export default function RenderingTabsBasedOnState() {
  const classes = useStyles();
  const [tabs, setTabs] = useState([
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
  ]);

  const onChange = (e, value) => {
    setTabs(
      tabs
        .map(tab => ({ ...tab, active: false }))
        .map((tab, index) => ({
          ...tab,
          active: index === value
        }))
    );
  };

  const active = tabs.findIndex(tab => tab.active);
  const content = tabs[active].content;

  return (
    <div className={classes.root}>
      <Tabs value={active} onChange={onChange}>
        {tabs
          .filter(tab => !tab.hidden)
          .map(tab => (
            <Tab
              key={tab.label}
              disabled={tab.disabled}
              icon={tab.icon}
              label={tab.label}
            />
          ))}
      </Tabs>
      <Typography component="div" className={classes.tabContent}>
        {content}
      </Typography>
    </div>
  );
}
