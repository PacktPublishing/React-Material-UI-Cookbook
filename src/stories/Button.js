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

import {
  Flat,
  FloatingAction,
  Icon,
  IconAndLabel,
  Raised,
  Sizes
} from '../Button';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Flat', () => <Flat />)
  .add('Raised', () => <Raised />)
  .add('FloatingAction', () => <FloatingAction />)
  .add('Sizes', () => <Sizes />)
  .add('Icon', () => <Icon />)
  .add('Icon and Label', () => <IconAndLabel />);
