import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothDisabledIcon from '@material-ui/icons/BluetoothDisabled';
import DevicesIcon from '@material-ui/icons/Devices';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const MaybeBluetoothIcon = ({ bluetooth }) =>
  bluetooth ? <BluetoothIcon /> : <BluetoothDisabledIcon />;

export default function ListControls() {
  const [items, setItems] = useState([
    {
      name: 'Device 1',
      bluetooth: true,
      power: true,
      Icon: DevicesIcon
    },
    {
      name: 'Device 2',
      bluetooth: true,
      power: true,
      Icon: DevicesIcon
    },
    {
      name: 'Device 3',
      bluetooth: true,
      power: true,
      Icon: DevicesIcon
    }
  ]);

  const onToggleClick = (index, prop) => () => {
    const newItems = [...items];
    const item = items[index];

    newItems[index] = { ...item, [prop]: !item[prop] };

    setItems(newItems);
  };

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <ListItem key={index} disabled={!item.power} button>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={item.name} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={onToggleClick(index, 'bluetooth')}
              disabled={!item.power}
            >
              <MaybeBluetoothIcon bluetooth={item.bluetooth} />
            </IconButton>
            <IconButton onClick={onToggleClick(index, 'power')}>
              <PowerSettingsNewIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
