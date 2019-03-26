import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import withThemeProvider from './withThemeProvider';

import {
  AppBarIntegration,
  TabAlignment,
  RenderingTabsBasedOnState,
  AbstractingTabContent,
  TabNavigationWithRoutes
} from '../Chapter04Tabs';

storiesOf('Chapter 4 Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .addDecorator(StoryRouter())
  .add('AppBar Integration', () => <AppBarIntegration />)
  .add('Tab Alignment', () => <TabAlignment />)
  .add('Rendering Tabs Based on State', () => (
    <RenderingTabsBasedOnState />
  ))
  .add('Abstracting Tab Content', () => <AbstractingTabContent />)
  .add('Tab Navigation With Routes', () => (
    <TabNavigationWithRoutes />
  ));
