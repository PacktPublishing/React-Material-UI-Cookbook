import React, { Fragment, Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const NavMenuItem = ({ color, ...props }) => (
  <Switch>
    <Route
      exact
      path={props.to}
      render={() => <MenuItem selected component={Link} {...props} />}
    />
    <Route
      path="/"
      render={() => <MenuItem component={Link} {...props} />}
    />
  </Switch>
);

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

export default withStyles(styles)(
  class CustomizingMenuItems extends Component {
    state = { anchorEl: null };

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
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.onClose}
          >
            <NavMenuItem to="/" onClick={this.onClose}>
              Home
            </NavMenuItem>
            <NavMenuItem to="/page1" onClick={this.onClose}>
              Page 1
            </NavMenuItem>
            <NavMenuItem to="/page2" onClick={this.onClose}>
              Page 2
            </NavMenuItem>
          </Menu>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Typography>home content</Typography>}
            />
            <Route
              path="/page1"
              render={() => <Typography>page 1 content</Typography>}
            />
            <Route
              path="/page2"
              render={() => <Typography>page 2 content</Typography>}
            />
          </Switch>
        </Fragment>
      );
    }
  }
);
