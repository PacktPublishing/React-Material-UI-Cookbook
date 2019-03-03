import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import { withKnobs } from '@storybook/addon-knobs';

import {
  MainContent,
  CardHeader,
  PerformingActions,
  PresentingMedia,
  ExpandableCards
} from '../Card';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('Main Content', () => <MainContent />)
  .add('Card Header', () => <CardHeader />)
  .add('Performing Actions', () => <PerformingActions />)
  .add('Presenting Media', () => <PresentingMedia />)
  .add('Expandable Cards', () => <ExpandableCards />);
