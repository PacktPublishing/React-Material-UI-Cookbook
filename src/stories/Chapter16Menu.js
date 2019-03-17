import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import withThemeProvider from './withThemeProvider';

import {
  ComposingMenusWithState,
  MenuScrollingOptions,
  UsingMenuTransitions,
  CustomizingMenuItems
} from '../Chapter16Menu';

storiesOf('Chapter 16 Menus', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .addDecorator(withThemeProvider)
  .add('Composing Menus With State', () => (
    <ComposingMenusWithState />
  ))
  .add('Menu Scrolling Options', () => <MenuScrollingOptions />)
  .add('Using Menu Transitions', () => (
    <UsingMenuTransitions
      transition={select(
        'Transition',
        {
          Collapse: 'collapse',
          Fade: 'fade',
          Grow: 'grow',
          Slide: 'slide'
        },
        'fade'
      )}
      duration={number('Duration', 300)}
    />
  ))
  .add('Customizing Menu Items', () => <CustomizingMenuItems />);
