import React from 'react';
import StoryRouter from 'storybook-react-router';

import { storiesOf } from '@storybook/react';

import {
  SnackbarContent,
  SnackbarTransitions,
  ControllingVisibilityWithState,
  PositioningSnackbars,
  ErrorBoundariesAndErrorSnackbars,
  SnackbarsWithActions,
  QueuingSnackbars
} from '../Snackbar';

storiesOf('Snackbar', module)
  .addDecorator(StoryRouter())
  .add('Snackbar Content', () => <SnackbarContent />)
  .add('Snackbar Transitions', () => <SnackbarTransitions />)
  .add('Controlling Visibility With State', () => (
    <ControllingVisibilityWithState />
  ))
  .add('Positioning Snackbars', () => <PositioningSnackbars />)
  .add('Error Boundaries and Error Snackbars', () => (
    <ErrorBoundariesAndErrorSnackbars />
  ))
  .add('SnackbarsWithActions', () => <SnackbarsWithActions />)
  .add('Queuing Snackbars', () => <QueuingSnackbars />);
