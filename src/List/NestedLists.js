import React, { Component, Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
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

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

const styles = theme => ({
  subItem: { paddingLeft: theme.spacing.unit * 3 }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      items: [
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
      ]
    };

    onClick = index => () => {
      this.setState(state => {
        const items = [...state.items];
        const item = items[index];

        items[index] = { ...item, expanded: !item.expanded };

        return { items };
      });
    };

    render() {
      const { classes } = this.props;

      return (
        <List>
          {this.state.items.map(({ Icon, ...item }, index) => (
            <Fragment>
              <ListItem button onClick={this.onClick(index)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                <ExpandIcon expanded={item.expanded} />
              </ListItem>
              <Collapse in={item.expanded}>
                {item.children.map(child => (
                  <ListItem button dense className={classes.subItem}>
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
  }
);
