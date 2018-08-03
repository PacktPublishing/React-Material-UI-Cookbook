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

import { SimpleBadges } from '../Badge';

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('Simple Badges', () => (
    <SimpleBadges
      primary={number('Primary', 4)}
      secondary={number('Secondary', 10)}
      iconButton={number('Icon Button', 4)}
      tab={number('Tab', 4)}
      typography={number('Typography', 4)}
      button={number('Button', 4)}
    />
  ));
