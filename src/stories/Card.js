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

import { Complex, Controls, Media, Simple } from '../Card';

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('Simple Card', () => <Simple />)
  .add('Media', () => <Media />)
  .add('UI Controls', () => <Controls />)
  .add('Complex Interaction', () => <Complex />);
