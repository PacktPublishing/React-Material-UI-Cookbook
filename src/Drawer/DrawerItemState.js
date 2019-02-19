import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const ListItems = ({ items, onClick }) =>
  items
    .filter(({ hidden }) => !hidden)
    .map(({ label, disabled, Icon }, i) => (
      <ListItem
        button
        key={i}
        disabled={disabled}
        onClick={onClick(label)}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    ));

export default function DrawerItemState() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('Home');
  const [items] = useState([
    { label: 'Home', Icon: HomeIcon },
    { label: 'Page 2', Icon: WebIcon },
    { label: 'Page 3', Icon: WebIcon, disabled: true },
    { label: 'Page 4', Icon: WebIcon },
    { label: 'Page 5', Icon: WebIcon, hidden: true }
  ]);

  const onClick = content => () => {
    setOpen(false);
    setContent(content);
  };

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography>{content}</Typography>
      </Grid>
      <Grid item>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItems items={items} onClick={onClick} />
          </List>
        </Drawer>
      </Grid>

      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Drawer
        </Button>
      </Grid>
    </Grid>
  );
}
