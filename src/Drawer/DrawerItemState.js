import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const styles = theme => ({
  alignContent: {
    alignSelf: 'center'
  }
});

const ListItems = ({ items, onClick }) =>
  items
    .filter(({ hidden }) => !hidden)
    .map(({ label, disabled, Icon }, i) => (
      <ListItem
        button
        key={i}
        disabled={disabled}
        onClick={onClick(label)}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    ));

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      content: 'Home',
      items: [
        { label: 'Home', Icon: HomeIcon },
        { label: 'Page 2', Icon: WebIcon },
        { label: 'Page 3', Icon: WebIcon, disabled: true },
        { label: 'Page 4', Icon: WebIcon },
        { label: 'Page 5', Icon: WebIcon, hidden: true }
      ]
    };

    onClick = content => () =>
      this.setState({ open: false, content });

    render() {
      const { classes } = this.props;

      return (
        <Grid container justify="space-between">
          <Grid item className={classes.alignContent}>
            <Typography>{this.state.content}</Typography>
          </Grid>
          <Grid item>
            <Drawer
              className={classes.drawerWidth}
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
            >
              <List>
                <ListItems
                  items={this.state.items}
                  onClick={this.onClick}
                />
              </List>
            </Drawer>
          </Grid>

          <Grid item>
            <Button
              onClick={() =>
                this.setState(state => ({ open: !state.open }))
              }
            >
              {this.state.open ? 'Hide' : 'Show'} Drawer
            </Button>
          </Grid>
        </Grid>
      );
    }
  }
);
