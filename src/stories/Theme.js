import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  UnderstandingThePalette,
  LightVersusDarkThemes,
  CustomTypography,
  CustomizingThemeProperties,
  NestingThemes,
  ComponentThemeSettings
} from '../Theme';

storiesOf('Themes', module)
  .add('Understanding The Palette', () => <UnderstandingThePalette />)
  .add('Light Versus Dark Themes', () => <LightVersusDarkThemes />)
  .add('Custom Typography', () => <CustomTypography />)
  .add('Customizing Theme Properties', () => (
    <CustomizingThemeProperties />
  ))
  .add('Nesting Themes', () => <NestingThemes />)
  .add('Component Theme Settings', () => <ComponentThemeSettings />);
