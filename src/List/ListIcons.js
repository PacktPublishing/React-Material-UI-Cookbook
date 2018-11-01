import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const MaybeSelectedIcon = ({ selected, Icon }) =>
  selected ? <CheckCircleOutlineIcon /> : <Icon />;

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [
        { name: 'First User' },
        { name: 'Second User' },
        { name: 'Third User' }
      ]
    };

    onClick = index => () =>
      this.setState(state => {
        const items = [...state.items];
        const item = items[index];

        items[index] = { ...item, selected: !item.selected };
        return { ...state, items };
      });

    render() {
      return (
        <List>
          {this.state.items.map((item, index) => (
            <ListItem
              button
              selected={item.selected}
              onClick={this.onClick(index)}
            >
              <ListItemText primary={item.name} />
              <ListItemIcon>
                <MaybeSelectedIcon
                  selected={item.selected}
                  Icon={AccountCircleIcon}
                />
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      );
    }
  }
);
