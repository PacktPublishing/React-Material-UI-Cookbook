import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  UnderstandingBreakpoints,
  FillingSpace,
  AbstractingContainersAndItems,
  FixedColumnLayout,
  ColumnDirection
} from '../Chapter01Grid';

storiesOf('Chapter 1 Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
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
      width={select('Width', { '25%': 3, '50%': 6, '100%': 12 }, 6)}
    />
  ))
  .add('Column Direction', () => <ColumnDirection />);
