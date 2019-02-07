import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  TypesOfTypography,
  UsingThemeColors,
  AligningText,
  WrappingText
} from '../Typography';

storiesOf('Typography', module)
  .add('Types Of Typography', () => <TypesOfTypography />)
  .add('Using Theme Colors', () => <UsingThemeColors />)
  .add('Aligning Text', () => <AligningText />)
  .add('Wrapping Text', () => <WrappingText />);
