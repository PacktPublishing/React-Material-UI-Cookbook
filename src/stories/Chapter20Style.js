import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  BasicComponentStyles,
  ScopedComponentStyles,
  ExtendingComponentStyles,
  MovingStylesToThemes,
  OtherStylingOptions
} from '../Chapter20Style';

storiesOf('Chapter 20 Styles', module)
  .add('Basic Component Styles', () => <BasicComponentStyles />)
  .add('Scoped Component Styles', () => <ScopedComponentStyles />)
  .add('Extending Component Styles', () => (
    <ExtendingComponentStyles />
  ))
  .add('Moving Styles To Themes', () => <MovingStylesToThemes />)
  .add('Other Styling Options', () => <OtherStylingOptions />);
