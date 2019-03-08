import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

export default function IconButtons({ iconColor }) {
  const [mic, setMic] = useState(true);
  const [volume, setVolume] = useState(true);

  return (
    <Grid container>
      <Grid item>
        <IconButton color={iconColor} onClick={() => setMic(!mic)}>
          {mic ? <MicIcon /> : <MicOffIcon />}
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton
          color={iconColor}
          onClick={() => setVolume(!volume)}
        >
          {volume ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </Grid>
    </Grid>
  );
}
