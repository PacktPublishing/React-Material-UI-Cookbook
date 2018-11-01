import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

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
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  }
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
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
  ({ classes, variant, open, onClose, onItemClick }) => (
    <Drawer variant={variant} open={open} onClose={onClose}>
      <div
        className={classNames({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
      <List>
        <ListItem button onClick={onItemClick('Home')}>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={onItemClick('Page 2')}>
          <ListItemText>Page 2</ListItemText>
        </ListItem>
        <ListItem button onClick={onItemClick('Page 3')}>
          <ListItemText>Page 3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
);

export default withStyles(styles)(
  class extends Component {
    static getDerivedStateFromProps(props, state) {
      return { ...state, variant: props.variant };
    }

    state = { drawer: false, title: 'Home', variant: 'temporary' };

    toggleDrawer = () =>
      this.setState(state => ({
        drawer: !state.drawer
      }));

    onItemClick = title => () => {
      this.setState(state => ({
        title,
        drawer: state.variant === 'temporary' ? false : state.drawer
      }));
    };

    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <MyToolbar
            title={this.state.title}
            onMenuClick={this.toggleDrawer}
          />
          <MyDrawer
            open={this.state.drawer}
            onClose={this.toggleDrawer}
            onItemClick={this.onItemClick}
            variant={this.state.variant}
          />
        </div>
      );
    }
  }
);
