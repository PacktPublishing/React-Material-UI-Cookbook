import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const styles = theme => ({
  alignContent: {
    alignSelf: 'center'
  },
  listSubheader: {
    padding: 0,
    minWidth: 0,
    color: 'inherit',
    '&:hover': {
      background: 'inherit'
    }
  }
});

const ListItems = ({ items, visible, onClick }) => (
  <Collapse in={visible}>
    {items
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
      ))}
  </Collapse>
);

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      content: 'Home',
      items: {
        cpu: [
          { label: 'Add CPU', Icon: AddIcon },
          { label: 'Remove CPU', Icon: RemoveIcon },
          { label: 'Usage', Icon: ShowChartIcon }
        ],
        memory: [
          { label: 'Add Memory', Icon: AddIcon },
          { label: 'Usage', Icon: ShowChartIcon }
        ],
        storage: [
          { label: 'Add Storage', Icon: AddIcon },
          { label: 'Usage', Icon: ShowChartIcon }
        ],
        network: [
          { label: 'Add Network', Icon: AddIcon, disabled: true },
          { label: 'Usage', Icon: ShowChartIcon }
        ]
      },
      sections: {
        cpu: true,
        memory: false,
        storage: false,
        network: false
      }
    };

    onClick = content => () =>
      this.setState({ open: false, content });

    toggleSection = name => () =>
      this.setState(state => ({
        sections: { ...state.sections, [name]: !state.sections[name] }
      }));

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
                <ListSubheader>
                  <Button
                    disableRipple
                    classes={{ root: classes.listSubheader }}
                    onClick={this.toggleSection('cpu')}
                  >
                    CPU
                  </Button>
                </ListSubheader>
                <ListItems
                  visible={this.state.sections.cpu}
                  items={this.state.items.cpu}
                  onClick={this.onClick}
                />
                <ListSubheader>
                  <Button
                    disableRipple
                    classes={{ root: classes.listSubheader }}
                    onClick={this.toggleSection('memory')}
                  >
                    Memory
                  </Button>
                </ListSubheader>
                <ListItems
                  visible={this.state.sections.memory}
                  items={this.state.items.memory}
                  onClick={this.onClick}
                />
                <ListSubheader>
                  <Button
                    disableRipple
                    classes={{ root: classes.listSubheader }}
                    onClick={this.toggleSection('storage')}
                  >
                    Storage
                  </Button>
                </ListSubheader>
                <ListItems
                  visible={this.state.sections.storage}
                  items={this.state.items.storage}
                  onClick={this.onClick}
                />
                <ListSubheader>
                  <Button
                    disableRipple
                    classes={{ root: classes.listSubheader }}
                    onClick={this.toggleSection('network')}
                  >
                    Network
                  </Button>
                </ListSubheader>
                <ListItems
                  visible={this.state.sections.network}
                  items={this.state.items.network}
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
