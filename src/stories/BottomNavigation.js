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

import { WithLabels, WithoutLabels } from '../BottomNavigation';

storiesOf('BottomNavigation', module)
  .addDecorator(withKnobs)
  .add('With Labels', () => <WithLabels />)
  .add('Without Labels', () => <WithoutLabels />);
