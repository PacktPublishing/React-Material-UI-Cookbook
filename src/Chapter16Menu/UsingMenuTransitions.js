import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

export default withStyles(styles)(
  class UsingMenuTransitions extends Component {
    state = {
      anchorEl: null
    };

    onOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    onClose = () => {
      this.setState({ anchorEl: null });
    };

    render() {
      const { classes, transition, duration } = this.props;
      const { anchorEl } = this.state;

      return (
        <Fragment>
          <Button onClick={this.onOpen}>
            Menu
            <MenuIcon className={classes.rightIcon} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.onClose}
            transitionDuration={duration}
            TransitionComponent={
              {
                collapse: Collapse,
                fade: Fade,
                grow: Grow,
                slide: Slide
              }[transition]
            }
          >
            <MenuItem onClick={this.onClose}>Profile</MenuItem>
            <MenuItem onClick={this.onClose}>My account</MenuItem>
            <MenuItem onClick={this.onClose}>Logout</MenuItem>
          </Menu>
        </Fragment>
      );
    }
  }
);
