import React, { Component } from 'react';
import { List as VirtualList, AutoSizer } from 'react-virtualized';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

function* genItems() {
  for (let i = 1; i <= 1000; i++) {
    yield `Item ${i}`;
  }
}

const styles = theme => ({
  list: {
    height: 300
  },
  paper: {
    margin: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [...genItems()]
    };

    rowRenderer = ({ index, isScrolling, key, style }) => {
      const { classes } = this.props;
      const item = this.state.items[index];

      return (
        <ListItem button key={key} style={style}>
          <ListItemText primary={isScrolling ? '...' : item} />
        </ListItem>
      );
    };

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.paper}>
          <List className={classes.list}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <VirtualList
                  width={width}
                  height={300}
                  rowHeight={50}
                  rowCount={this.state.items.length}
                  rowRenderer={this.rowRenderer}
                />
              )}
            </AutoSizer>
          </List>
        </Paper>
      );
    }
  }
);
