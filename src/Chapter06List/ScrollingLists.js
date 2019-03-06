import React, { useState } from 'react';
import { List as VirtualList, AutoSizer } from 'react-virtualized';

import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  list: {
    height: 300
  },
  paper: {
    margin: theme.spacing(3)
  }
}));

function* genItems() {
  for (let i = 1; i <= 1000; i++) {
    yield `Item ${i}`;
  }
}

export default function ScrollingLists() {
  const classes = useStyles();
  const [items] = useState([...genItems()]);

  const rowRenderer = ({ index, isScrolling, key, style }) => {
    const item = items[index];

    return (
      <ListItem button key={key} style={style}>
        <ListItemText primary={isScrolling ? '...' : item} />
      </ListItem>
    );
  };

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        <AutoSizer disableHeight>
          {({ width }) => (
            <VirtualList
              width={width}
              height={300}
              rowHeight={50}
              rowCount={items.length}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </List>
    </Paper>
  );
}
