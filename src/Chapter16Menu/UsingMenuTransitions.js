import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function UsingMenuTransitions({
  transition,
  duration
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const onOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button onClick={onOpen}>
        Menu
        <MenuIcon className={classes.rightIcon} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
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
        <MenuItem onClick={onClose}>Profile</MenuItem>
        <MenuItem onClick={onClose}>My account</MenuItem>
        <MenuItem onClick={onClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
}
