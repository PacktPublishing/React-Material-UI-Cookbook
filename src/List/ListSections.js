import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});

export default withStyles(styles)(() => (
  <Fragment>
    <Typography variant="title">First Section</Typography>
    <List>
      <ListItem>
        <ListItemText primary="First" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Second" />
      </ListItem>
    </List>
    <Typography variant="title">Second Section</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Third" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Fourth" />
      </ListItem>
    </List>
    <Typography variant="title">Third Section</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Fifth" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Sixth" />
      </ListItem>
    </List>
  </Fragment>
));
