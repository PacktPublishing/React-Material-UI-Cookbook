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

import { Inset, List } from '../Divider';

storiesOf('Dividers', module)
  .addDecorator(withKnobs)
  .add('List Dividers', () => <List />)
  .add('Inset Dividers', () => <Inset />);
