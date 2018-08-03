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

import { ChipArray, Simple } from '../Chip';

storiesOf('Chips', module)
  .addDecorator(withKnobs)
  .add('Simple Chips', () => <Simple />)
  .add('Chip Array', () => <ChipArray />);
