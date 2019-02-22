import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import StorageIcon from '@material-ui/icons/Storage';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(1)
  }
});

const FormattingPanelHeaders = withStyles(styles)(({ classes }) => (
  <Fragment>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <DevicesIcon className={classes.icon} />
        <Typography variant="subtitle1">Devices</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Devices content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <NetworkWifiIcon className={classes.icon} />
        <Typography variant="subtitle1">Networks</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Networks content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <StorageIcon className={classes.icon} />
        <Typography variant="subtitle1">Storage</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Storage content...</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
));

export default FormattingPanelHeaders;
