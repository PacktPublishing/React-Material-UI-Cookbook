import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [
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
      ]
    };

    onToggleClick = (index, prop) => () =>
      this.setState(state => {
        const items = [...state.items];
        const item = items[index];

        items[index] = { ...item, [prop]: !item[prop] };

        return { ...state, items };
      });

    render() {
      return (
        <List>
          {this.state.items.map(({ Icon, ...item }, index) => (
            <ListItem button disabled={!item.power}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={this.onToggleClick(index, 'bluetooth')}
                  disabled={!item.power}
                >
                  <MaybeBluetoothIcon bluetooth={item.bluetooth} />
                </IconButton>
                <IconButton
                  onClick={this.onToggleClick(index, 'power')}
                >
                  <PowerSettingsNewIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      );
    }
  }
);
