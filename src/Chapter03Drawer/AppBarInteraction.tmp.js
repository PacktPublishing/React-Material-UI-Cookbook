import React, { useState, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, setTitle }) => (
    <Drawer variant={variant} open={open} onClose={onClose}>
      <List>
        <ListItem
          button
          onClick={() => {
            setTitle('Home');
            onClose();
          }}
        >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setTitle('Page 2');
            onClose();
          }}
        >
          <ListItemText>Page 2</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setTitle('Page 3');
            onClose();
          }}
        >
          <ListItemText>Page 3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
);

function AppBarInteraction({ classes }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Home');
  const [variant] = useState('temporary');

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        setTitle={setTitle}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
