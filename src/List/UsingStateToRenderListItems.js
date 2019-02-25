import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function UsingStatetoRenderListItems() {
  const [items, setItems] = useState([
    { name: 'First Item', timestamp: new Date() },
    { name: 'Second Item', timestamp: new Date() },
    { name: 'Third Item', timestamp: new Date() }
  ]);

  const onClick = index => () => {
    const item = items[index];
    const newItems = [...items];

    newItems[index] = { ...item, selected: !item.selected };
    setItems(newItems);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          button
          dense
          selected={item.selected}
          onClick={onClick(index)}
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
