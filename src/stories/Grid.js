import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select } from '@storybook/addon-knobs/react';

import {
  UnderstandingBreakpoints,
  FillingSpace,
  AbstractingContainersAndItems,
  FixedColumnLayout,
  ColumnDirection
} from '../Grid';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add('Understanding Breakpoints', () => (
    <UnderstandingBreakpoints />
  ))
  .add('Filling Space', () => (
    <FillingSpace
      justify={select('Justify', [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around'
      ])}
    />
  ))
  .add('Abstracting Containers and Items', () => (
    <AbstractingContainersAndItems />
  ))
  .add('Fixed Column Layout', () => (
    <FixedColumnLayout
      width={select(
        'Width',
        { '3': '25%', '6': '50%', '12': '100%' },
        '6'
      )}
    />
  ))
  .add('Column Direction', () => <ColumnDirection />);
