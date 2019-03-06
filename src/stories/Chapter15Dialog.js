import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  CollectingFormInput,
  ConfirmingActions,
  DisplayingAlerts,
  APIIntegration,
  FullScreenDialogs,
  ScrollingDialogContent
} from '../Chapter15Dialog';

storiesOf('Chapter 15 Dialogs', module)
  .add('Collecting Form Input', () => <CollectingFormInput />)
  .add('Confirming Actions', () => <ConfirmingActions />)
  .add('Displaying Alerts', () => <DisplayingAlerts />)
  .add('API Integration', () => <APIIntegration />)
  .add('Full Screen Dialogs', () => <FullScreenDialogs />)
  .add('Scrolling Dialog Content', () => <ScrollingDialogContent />);
