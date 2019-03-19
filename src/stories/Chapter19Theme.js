import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, select, withKnobs } from '@storybook/addon-knobs';

import {
  UnderstandingThePalette,
  LightVersusDarkThemes,
  CustomTypography,
  NestingThemes,
  ComponentThemeSettings
} from '../Chapter19Theme';

const hueOptions = {
  Red: 'red',
  Pink: 'pink',
  Purple: 'purple',
  'Deep Purple': 'deepPurple',
  Indigo: 'indigo',
  Blue: 'blue',
  'Light Blue': 'lightBlue',
  Cyan: 'cyan',
  Teal: 'teal',
  Green: 'green',
  'Light Green': 'lightGreen',
  Lime: 'lime',
  Yellow: 'yellow',
  Amber: 'amber',
  Orange: 'orange',
  'Deep Orange': 'deepOrange',
  Brown: 'brown',
  Grey: 'grey',
  'Blue Grey': 'blueGrey'
};

const shadeOptions = {
  range: true,
  min: 100,
  max: 900,
  step: 100
};

storiesOf('Chapter 19 Themes', module)
  .addDecorator(withKnobs)
  .add('Understanding The Palette', () => (
    <UnderstandingThePalette
      primaryHue={select(
        'Primary Hue',
        hueOptions,
        'blue',
        'Primary'
      )}
      primaryShade={number(
        'Primary Shade',
        500,
        shadeOptions,
        'Primary'
      )}
      secondaryHue={select(
        'Secondary Hue',
        hueOptions,
        'pink',
        'Secondary'
      )}
      secondaryShade={number(
        'Secondary Shade',
        500,
        shadeOptions,
        'Secondary'
      )}
      errorHue={select('Error Hue', hueOptions, 'red', 'Error')}
      errorShade={number('Error Shade', 600, shadeOptions, 'Error')}
    />
  ))
  .add('Light Versus Dark Themes', () => (
    <LightVersusDarkThemes
      themeType={select(
        'Theme Type',
        { Light: 'light', Dark: 'dark' },
        'light'
      )}
    />
  ))
  .add('Custom Typography', () => (
    <CustomTypography
      themeFont={select(
        'Font',
        { Roboto: 'roboto', Exo: 'exo', Ubuntu: 'ubuntu' },
        'roboto'
      )}
    />
  ))
  .add('Nesting Themes', () => <NestingThemes />)
  .add('Component Theme Settings', () => <ComponentThemeSettings />);
