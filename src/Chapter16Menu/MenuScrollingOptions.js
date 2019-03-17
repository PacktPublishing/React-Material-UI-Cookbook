import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const items = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
  menuPaper: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 }
}));

export default function MenuScrollingOptions() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState('');

  const onOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onSelect = selected => () => {
    setSelected(selected);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton onClick={onOpen}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        PaperProps={{
          classes: { elevation8: classes.menuPaper }
        }}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            selected={index === selected}
            onClick={onSelect(index)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
}
