import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export default function withThemeProvider(story) {
  return (
    <ThemeProvider theme={createMuiTheme()}>{story()}</ThemeProvider>
  );
}
