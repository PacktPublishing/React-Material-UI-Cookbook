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
  DrawerTypes,
  DrawerItemState,
  DrawerItemNavigation,
  DrawerSections,
  AppBarInteraction
} from '../Drawer';

storiesOf('Drawers', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Drawer Types', () => (
    <DrawerTypes
      variant={select(
        'Variant',
        {
          temporary: 'Temporary',
          persistent: 'Persistent',
          permanent: 'Permanent'
        },
        'temporary'
      )}
    />
  ))
  .add('Drawer Item State', () => <DrawerItemState />)
  .add('Drawer Item Navigation', () => <DrawerItemNavigation />)
  .add('Drawer Sections', () => <DrawerSections />)
  .add('AppBar Interaction', () => (
    <AppBarInteraction
      variant={select(
        'Variant',
        {
          temporary: 'Temporary',
          persistent: 'Persistent'
        },
        'temporary'
      )}
    />
  ));
