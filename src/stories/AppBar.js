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
  array
} from '@storybook/addon-knobs/react';

import {
  HideOnScroll,
  FixedPosition,
  ToolbarAbstraction,
  WithNavigation
} from '../AppBar';

storiesOf('App Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Hide On Scroll', () => <HideOnScroll />)
  .add('Fixed Position', () => <FixedPosition />)
  .add('Toolbar Abstraction', () => (
    <ToolbarAbstraction title={text('Title', 'My Toolbar')} />
  ))
  .add('With Navigation', () => (
    <WithNavigation title={text('Title', 'With Navigation')} />
  ));
