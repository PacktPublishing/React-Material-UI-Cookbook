import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const items = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
];

const ITEM_HEIGHT = 48;

const styles = theme => ({
  menuPaper: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 }
});

export default withStyles(styles)(
  class MenuScrollingOptions extends Component {
    state = {
      anchorEl: null,
      selected: ''
    };

    onOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    onClose = () => {
      this.setState({ anchorEl: null });
    };

    onSelect = selected => () => {
      this.setState({ selected, anchorEl: null });
    };

    render() {
      const { classes } = this.props;
      const { anchorEl } = this.state;

      return (
        <Fragment>
          <IconButton onClick={this.onOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.onClose}
            PaperProps={{
              classes: { elevation8: classes.menuPaper }
            }}
          >
            {items.map((item, index) => (
              <MenuItem
                key={index}
                selected={index === this.state.selected}
                onClick={this.onSelect(index)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Fragment>
      );
    }
  }
);
