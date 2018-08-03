import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  text,
  boolean,
  number,
  array
} from '@storybook/addon-knobs/react';

import { HideOnScroll, FixedPosition } from '../AppBar';

storiesOf('App Bar', module)
  .addDecorator(withKnobs)
  .add('Hide On Scroll', () => <HideOnScroll />)
  .add('Fixed Position', () => <FixedPosition />);
