import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {
  withKnobs,
  boolean,
  select
} from '@storybook/addon-knobs/react';

import {
  ButtonVariants,
  ButtonEmphasis,
  LinkButtons,
  FloatingActions,
  IconButtons,
  ButtonSizes
} from '../Chapter10Button';

storiesOf('Chapter 10 Buttons', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('Button Variants', () => <ButtonVariants />)
  .add('Button Emphasis', () => (
    <ButtonEmphasis
      disabled={boolean('Disabled', false)}
      appBarColor={select('AppBar Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary'
      })}
    />
  ))
  .add('Link Buttons', () => <LinkButtons />)
  .add('Floating Actions', () => (
    <FloatingActions
      fabColor={select('FAB Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary'
      })}
    />
  ))
  .add('Icon Buttons', () => (
    <IconButtons
      iconColor={select('Icon Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary'
      })}
    />
  ))
  .add('Button Sizes', () => (
    <ButtonSizes
      color={select('Color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary'
      })}
      size={select('Size', {
        Small: 'small',
        Medium: 'medium'
      })}
    />
  ));
