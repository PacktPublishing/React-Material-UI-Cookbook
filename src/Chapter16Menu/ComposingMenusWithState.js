import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
}));

const MyMenu = ({ items, onClose, anchorEl }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
  >
    {items.map((item, index) => (
      <MenuItem
        key={index}
        onClick={item.onClick}
        disabled={item.disabled}
      >
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

export default function ComposingMenusWithState() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useState([
    { name: 'Enable Fourth' },
    { name: 'Second', onClick: onClose },
    { name: 'Third', onClick: onClose },
    { name: 'Fourth', onClick: onClose, disabled: true }
  ]);

  useEffect(() => {
    const toggleFourth = () => {
      let newItems = [...items];

      newItems[3] = { ...items[3], disabled: !items[3].disabled };
      newItems[0] = {
        ...items[0],
        name: newItems[3].disabled
          ? 'Enable Fourth'
          : 'Disable Fourth'
      };

      setItems(newItems);
    };

    const newItems = [...items];
    newItems[0] = { ...items[0], onClick: toggleFourth };
    setItems(newItems);
  });

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
      <MyMenu items={items} onClose={onClose} anchorEl={anchorEl} />
    </Fragment>
  );
}
