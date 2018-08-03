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
  Temporary,
  Swipeable,
  PermanentFullHeight,
  PermanentClipped,
  Persistent,
  Mini
} from '../Drawer';

storiesOf('Drawers', module)
  .addDecorator(withKnobs)
  .add('Temporary Drawer', () => <Temporary />)
  .add('Swipeable Drawer', () => <Swipeable />)
  .add('Permanent Full Height Drawer', () => <PermanentFullHeight />)
  .add('Permanent Clipped Drawer', () => <PermanentClipped />)
  .add('Persistent Drawer', () => <Persistent />)
  .add('Mini Drawer', () => <Mini />);
