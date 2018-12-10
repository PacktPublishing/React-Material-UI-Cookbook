import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default () => (
  <Snackbar
    open={true}
    message="Test"
    ContentProps={{ variant: 'h6' }}
  />
);
