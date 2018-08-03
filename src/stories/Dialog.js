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
  Alert,
  Confirmation,
  Form,
  FullScreen,
  Simple
} from '../Dialog';

storiesOf('Dialogs', module)
  .addDecorator(withKnobs)
  .add('Simple Dialog', () => <Simple />)
  .add('Alerts', () => <Alert />)
  .add('Confirmations', () => <Confirmation />)
  .add('Full Screen', () => <FullScreen />)
  .add('Forms', () => <Form />);
