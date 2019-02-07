import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  IconColorAndState,
  ScalingIcons,
  DynamicallyLoadingIcons,
  ThemedIcons,
  InstallingMoreIcons
} from '../Icon';

storiesOf('Icons', module)
  .add('Icon Color and State', () => <IconColorAndState />)
  .add('Scaling Icons', () => <ScalingIcons />)
  .add('Dynamically Loading Icons', () => <DynamicallyLoadingIcons />)
  .add('Themed Icons', () => <ThemedIcons />)
  .add('Installing More Icons', () => <InstallingMoreIcons />);
