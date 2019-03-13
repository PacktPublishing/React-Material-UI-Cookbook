import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  AbstractingCheckboxGroups,
  CustomizingCheckboxItems,
  AbstractingRadioButtonGroups,
  RadioButtonTypes,
  ReplacingCheckboxesWithSwitches,
  ControllingSelectsWithState,
  SelectingMultipleItems
} from '../Chapter13Selection';

storiesOf('Chapter 13 Selection', module)
  .addDecorator(withThemeProvider)
  .add('Abstracting Checkbox Groups', () => (
    <AbstractingCheckboxGroups />
  ))
  .add('Customizing Checkbox Items', () => (
    <CustomizingCheckboxItems />
  ))
  .add('Abstracting Radio Button Groups', () => (
    <AbstractingRadioButtonGroups />
  ))
  .add('Radio Button Types', () => <RadioButtonTypes />)
  .add('Replacing Checkboxes With Switches', () => (
    <ReplacingCheckboxesWithSwitches />
  ))
  .add('Controlling Selects With State', () => (
    <ControllingSelectsWithState />
  ))
  .add('Selecting Multiple Items', () => <SelectingMultipleItems />);
