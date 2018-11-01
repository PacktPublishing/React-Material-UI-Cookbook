import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  drawerWidth: 240
});

export default withStyles(styles)(
  class extends Component {
    state = { open: false };

    render() {
      const { classes, variant } = this.props;

      return (
        <Grid container justify="space-between">
          <Grid item>
            <Drawer
              variant={variant}
              className={classes.drawerWidth}
              open={this.state.open}
              onClose={() => this.setState({ open: false })}
            >
              <List>
                <ListItem
                  button
                  onClick={() =>
                    this.setState({
                      open: this.props.variant !== 'temporary'
                    })
                  }
                >
                  <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() =>
                    this.setState({
                      open: this.props.variant !== 'temporary'
                    })
                  }
                >
                  <ListItemText>Page 2</ListItemText>
                </ListItem>
                <ListItem
                  button
                  onClick={() =>
                    this.setState({
                      open: this.props.variant !== 'temporary'
                    })
                  }
                >
                  <ListItemText>Page 3</ListItemText>
                </ListItem>
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
