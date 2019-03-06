import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  UsingStateToRenderListItems,
  ListIcons,
  ListAvatarsAndText,
  ListSections,
  NestedLists,
  ListControls,
  ScrollingLists
} from '../Chapter06List';

storiesOf('Chapter 6 Lists', module)
  .addDecorator(withThemeProvider)
  .add('Using State to Render List Items', () => (
    <UsingStateToRenderListItems />
  ))
  .add('List Icons', () => <ListIcons />)
  .add('List Avatars and Text', () => <ListAvatarsAndText />)
  .add('List Sections', () => <ListSections />)
  .add('Nested Lists', () => <NestedLists />)
  .add('List Controls', () => <ListControls />)
  .add('ScrollingLists', () => <ScrollingLists />);
