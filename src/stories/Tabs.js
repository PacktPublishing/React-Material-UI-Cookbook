import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import {
  AppBarIntegration,
  TabAlignment,
  RenderingTabsBasedOnState,
  AbstractingTabContent,
  TabNavigationWithRoutes
} from '../Tabs';

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('AppBar Integration', () => <AppBarIntegration />)
  .add('Tab Alignment', () => (
    <TabAlignment
      centered={boolean('Centered', false)}
      fullWidth={boolean('Full Width')}
    />
  ))
  .add('Rendering Tabs Based on State', () => (
    <RenderingTabsBasedOnState />
  ))
  .add('Abstracting Tab Content', () => <AbstractingTabContent />)
  .add('Tab Navigation With Routes', () => (
    <TabNavigationWithRoutes />
  ));
