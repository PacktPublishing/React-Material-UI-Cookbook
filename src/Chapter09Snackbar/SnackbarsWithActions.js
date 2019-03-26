import React, { Fragment, useState } from 'react';
import { Route, Link } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

export default function Snackbars() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={() => (
          <Button onClick={() => setOpen(true)}>create thing</Button>
        )}
      />
      <Route
        exact
        path="/thing"
        render={() => <Typography>The Thing</Typography>}
      />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Finished creating thing"
        action={
          <Fragment>
            <Button
              color="secondary"
              component={Link}
              to="/thing"
              onClick={() => setOpen(false)}
            >
              The Thing
            </Button>
            <IconButton
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  );
}
