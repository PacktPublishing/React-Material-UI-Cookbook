import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});

const SimpleBadges = ({
  classes,
  primary,
  secondary,
  iconButton,
  tab,
  button,
  typography
}) => (
  <div>
    <div>
      <Badge
        className={classes.margin}
        badgeContent={primary}
        color="primary"
      >
        <MailIcon />
      </Badge>
      <Badge
        className={classes.margin}
        badgeContent={secondary}
        color="secondary"
      >
        <MailIcon />
      </Badge>
      <IconButton className={classes.margin}>
        <Badge badgeContent={iconButton} color="primary">
          <MailIcon />
        </Badge>
      </IconButton>
    </div>
    <AppBar position="static" className={classes.margin}>
      <Tabs value={0}>
        <Tab
          label={
            <Badge
              className={classes.padding}
              color="secondary"
              badgeContent={tab}
            >
              Item One
            </Badge>
          }
        />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
    <Badge
      color="primary"
      badgeContent={typography}
      className={classes.margin}
    >
      <Typography className={classes.padding}>Typography</Typography>
    </Badge>
    <Badge
      color="primary"
      badgeContent={button}
      className={classes.margin}
    >
      <Button variant="raised">Button</Button>
    </Badge>
  </div>
);

export default withStyles(styles)(SimpleBadges);
