import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  ControllingInputWithState,
  PlaceholderAndHelperText,
  ValidationAndErrorDisplay,
  PasswordFields,
  MultilineInput,
  InputAdornments,
  InputMasking
} from '../Chapter11TextField';

storiesOf('Chapter 11 TextField', module)
  .addDecorator(withThemeProvider)
  .add('Controlling Input With State', () => (
    <ControllingInputWithState />
  ))
  .add('Placeholder and Helper Text', () => (
    <PlaceholderAndHelperText />
  ))
  .add('Validation and Error Display', () => (
    <ValidationAndErrorDisplay />
  ))
  .add('Password Fields', () => <PasswordFields />)
  .add('Multiline Input', () => <MultilineInput />)
  .add('Input Adornments', () => <InputAdornments />)
  .add('Input Masking', () => <InputMasking />);
