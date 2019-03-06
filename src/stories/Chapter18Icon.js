import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import {
  IconColorAndState,
  ScalingIcons,
  DynamicallyLoadingIcons,
  ThemedIcons,
  InstallingMoreIcons
} from '../Chapter18Icon';

storiesOf('Chapter 18 Icons', module)
  .addDecorator(withKnobs)
  .add('Icon Color and State', () => (
    <IconColorAndState
      color={select(
        'Color',
        {
          Action: 'action',
          Error: 'error',
          Inherit: 'inherit',
          Primary: 'primary',
          Secondary: 'secondary',
          Disabled: 'disabled'
        },
        'inherit'
      )}
    />
  ))
  .add('Scaling Icons', () => (
    <ScalingIcons
      fontSize={select(
        'Size',
        {
          Inherit: 'inherit',
          Default: 'default',
          Small: 'small',
          Large: 'large'
        },
        'default'
      )}
    />
  ))
  .add('Dynamically Loading Icons', () => (
    <DynamicallyLoadingIcons
      category={select(
        'Category',
        {
          Action: 'Action',
          Alert: 'Alert',
          Av: 'Av',
          Communication: 'Communication'
        },
        'Action'
      )}
    />
  ))
  .add('Themed Icons', () => (
    <ThemedIcons
      theme={select(
        'Theme',
        {
          Filled: 'Filled',
          Outlined: 'Outlined',
          Rounded: 'Rounded',
          Sharp: 'Sharp',
          'Two-Tone': 'TwoTone'
        },
        'Filled'
      )}
    />
  ))
  .add('Installing More Icons', () => <InstallingMoreIcons />);
