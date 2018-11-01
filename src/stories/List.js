import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import {
  UsingStateToRenderListItems,
  ListIcons,
  ListAvatarsAndText,
  ListSections,
  NestedLists,
  ListControls,
  ScrollingLists
} from '../List';

storiesOf('Lists', module)
  .addDecorator(withKnobs)
  .add('Using State to Render List Items', () => (
    <UsingStateToRenderListItems />
  ))
  .add('List Icons', () => <ListIcons />)
  .add('List Avatars and Text', () => <ListAvatarsAndText />)
  .add('List Sections', () => <ListSections />)
  .add('Nested Lists', () => <NestedLists />)
  .add('List Controls', () => <ListControls />)
  .add('ScrollingLists', () => <ScrollingLists />);
