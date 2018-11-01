import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [
        { name: 'First Item', timestamp: new Date() },
        { name: 'Second Item', timestamp: new Date() },
        { name: 'Third Item', timestamp: new Date() }
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
              dense
              selected={item.selected}
              onClick={this.onClick(index)}
            >
              <ListItemText
                primary={item.name}
                secondary={item.timestamp.toLocaleString()}
                primaryTypographyProps={{
                  color: item.selected ? 'primary' : undefined
                }}
              />
            </ListItem>
          ))}
        </List>
      );
    }
  }
);
