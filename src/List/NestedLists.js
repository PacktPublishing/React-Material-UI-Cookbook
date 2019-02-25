import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles(theme => ({
  subItem: { paddingLeft: theme.spacing(3) }
}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function NestedLists() {
  const classes = useStyles();
  const [items, setItems] = useState([
    {
      name: 'Messages',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'First Message', Icon: MailIcon },
        { name: 'Second Message', Icon: MailIcon }
      ]
    },
    {
      name: 'Contacts',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'First Contact', Icon: ContactMailIcon },
        { name: 'Second Contact', Icon: ContactMailIcon }
      ]
    }
  ]);

  const onClick = index => () => {
    const newItems = [...items];
    const item = items[index];

    newItems[index] = { ...item, expanded: !item.expanded };

    setItems(newItems);
  };

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <Fragment key={index}>
          <ListItem button onClick={onClick(index)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ExpandIcon expanded={item.expanded} />
          </ListItem>
          <Collapse in={item.expanded}>
            {item.children.map(child => (
              <ListItem
                key={child.name}
                className={classes.subItem}
                button
                dense
              >
                <ListItemIcon>
                  <child.Icon />
                </ListItemIcon>
                <ListItemText primary={child.name} />
              </ListItem>
            ))}
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
}
