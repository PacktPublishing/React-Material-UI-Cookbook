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

const ScalingIcons = withStyles(styles)(({ fontSize, classes }) => (
  <Fragment>
    <Cast className={classes.icon} fontSize={fontSize} />
    <CastConnected className={classes.icon} fontSize={fontSize} />
    <CastForEducation className={classes.icon} fontSize={fontSize} />
    <Computer className={classes.icon} fontSize={fontSize} />
    <DesktopMac className={classes.icon} fontSize={fontSize} />
    <DesktopWindows className={classes.icon} fontSize={fontSize} />
    <DeveloperBoard className={classes.icon} fontSize={fontSize} />
    <DeviceHub className={classes.icon} fontSize={fontSize} />
    <DeviceUnknown className={classes.icon} fontSize={fontSize} />
    <DevicesOther className={classes.icon} fontSize={fontSize} />
    <Dock className={classes.icon} fontSize={fontSize} />
    <Gamepad className={classes.icon} fontSize={fontSize} />
  </Fragment>
));

export default ScalingIcons;
