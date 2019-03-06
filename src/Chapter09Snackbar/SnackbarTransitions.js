import React, { Fragment, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

const MySnackbar = ({ transition, direction, ...rest }) => (
  <Snackbar
    TransitionComponent={
      { slide: Slide, grow: Grow, fade: Fade }[transition]
    }
    TransitionProps={{ direction }}
    {...rest}
  />
);

export default function SnackbarTransitions() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <Fragment>
      <Grid container spacing={8}>
        <Grid item>
          <Button variant="contained" onClick={() => setFirst(true)}>
            Slide Down
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setSecond(true)}>
            Slide Up
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setThird(true)}>
            Grow
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setFourth(true)}>
            Fade
          </Button>
        </Grid>
      </Grid>
      <MySnackbar
        open={first}
        onClose={() => setFirst(false)}
        autoHideDuration={5000}
        message="Slide Down"
        transition="slide"
        direction="down"
      />
      <MySnackbar
        open={second}
        onClose={() => setSecond(false)}
        autoHideDuration={5000}
        message="Slide Up"
        transition="slide"
        direction="up"
      />
      <MySnackbar
        open={third}
        onClose={() => setThird(false)}
        autoHideDuration={5000}
        message="Grow"
        transition="grow"
      />
      <MySnackbar
        open={fourth}
        onClose={() => setFourth(false)}
        autoHideDuration={5000}
        message="Fade"
        transition="fade"
      />
    </Fragment>
  );
}
