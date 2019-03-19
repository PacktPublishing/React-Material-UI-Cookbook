import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Cast from '@material-ui/icons/Cast';
import CastConnected from '@material-ui/icons/CastConnected';
import CastForEducation from '@material-ui/icons/CastForEducation';
import Computer from '@material-ui/icons/Computer';
import DesktopMac from '@material-ui/icons/DesktopMac';
import DesktopWindows from '@material-ui/icons/DesktopWindows';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import DeviceHub from '@material-ui/icons/DeviceHub';
import DeviceUnknown from '@material-ui/icons/DeviceUnknown';
import DevicesOther from '@material-ui/icons/DevicesOther';
import Dock from '@material-ui/icons/Dock';
import Gamepad from '@material-ui/icons/Gamepad';

const styles = theme => ({
  icon: { margin: theme.spacing(3) }
});

const IconColorAndState = withStyles(styles)(({ color, classes }) => (
  <Fragment>
    <Cast className={classes.icon} color={color} />
    <CastConnected className={classes.icon} color={color} />
    <CastForEducation className={classes.icon} color={color} />
    <Computer className={classes.icon} color={color} />
    <DesktopMac className={classes.icon} color={color} />
    <DesktopWindows className={classes.icon} color={color} />
    <DeveloperBoard className={classes.icon} color={color} />
    <DeviceHub className={classes.icon} color={color} />
    <DeviceUnknown className={classes.icon} color={color} />
    <DevicesOther className={classes.icon} color={color} />
    <Dock className={classes.icon} color={color} />
    <Gamepad className={classes.icon} color={color} />
  </Fragment>
));

export default IconColorAndState;
