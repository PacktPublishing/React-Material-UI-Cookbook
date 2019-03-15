import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  UsingDatePickers,
  UsingTimePickers,
  SettingInitialDateAndTimeValues,
  CombiningDateAndTimeComponents,
  IntegratingOtherDateAndTimePackages
} from '../Chapter14Pickers';

storiesOf('Chapter 14 Date and Time Pickers', module)
  .addDecorator(withThemeProvider)
  .add('Using Date Pickers', () => <UsingDatePickers />)
  .add('Using Time Pickers', () => <UsingTimePickers />)
  .add('Setting Initial Date and Time Values', () => (
    <SettingInitialDateAndTimeValues />
  ))
  .add('Combining Date and Time Components', () => (
    <CombiningDateAndTimeComponents />
  ))
  .add('Integrating Other Date and Time Packages', () => (
    <IntegratingOtherDateAndTimePackages />
  ));
