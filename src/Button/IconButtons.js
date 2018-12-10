import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const styles = theme => ({});

export default withStyles(styles)(
  class extends Component {
    state = { mic: true, volume: true };

    toggle = name => () => {
      this.setState(state => ({ [name]: !state[name] }));
    };

    render() {
      const { iconColor } = this.props;

      return (
        <Grid container>
          <Grid item>
            <IconButton
              color={iconColor}
              onClick={this.toggle('mic')}
            >
              {this.state.mic ? <MicIcon /> : <MicOffIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color={iconColor}
              onClick={this.toggle('volume')}
            >
              {this.state.volume ? (
                <VolumeUpIcon />
              ) : (
                <VolumeOffIcon />
              )}
            </IconButton>
          </Grid>
        </Grid>
      );
    }
  }
);
