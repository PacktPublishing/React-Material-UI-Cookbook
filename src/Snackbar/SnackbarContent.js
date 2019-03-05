import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const MySnackbarContent = () => (
  <Snackbar
    open={true}
    message="Test"
    ContentProps={{ variant: 'h6' }}
  />
);

export default MySnackbarContent;
