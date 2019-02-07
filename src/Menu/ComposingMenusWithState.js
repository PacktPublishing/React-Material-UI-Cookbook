import React, { Fragment, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const MyMenu = ({ items, onClose, anchorEl }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
  >
    {items.map((item, index) => (
      <MenuItem
        key={index}
        onClick={item.onClick}
        disabled={item.disabled}
      >
        {item.name}
      </MenuItem>
    ))}
  </Menu>
);

export default withStyles(styles)(
  class ComposingMenusWithState extends Component {
    constructor() {
      super();
      this.state = {
        anchorEl: null,
        items: [
          { name: 'Enable Fourth', onClick: this.toggleFourth },
          { name: 'Second', onClick: this.onClose },
          { name: 'Third', onClick: this.onClose },
          { name: 'Fourth', onClick: this.onClose, disabled: true }
        ]
      };
    }

    toggleFourth = () => {
      this.setState(state => {
        const items = [...state.items];

        items[3] = { ...items[3], disabled: !items[3].disabled };
        items[0] = {
          ...items[0],
          name: items[3].disabled ? 'Enable Fourth' : 'Disable Fourth'
        };

        return { items };
      });
    };

    onOpen = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    onClose = () => {
      this.setState({ anchorEl: null });
    };

    render() {
      const { classes } = this.props;
      const { anchorEl } = this.state;

      return (
        <Fragment>
          <Button onClick={this.onOpen}>
            Menu
            <MenuIcon className={classes.rightIcon} />
          </Button>
          <MyMenu
            items={this.state.items}
            onClose={this.onClose}
            anchorEl={anchorEl}
          />
        </Fragment>
      );
    }
  }
);
