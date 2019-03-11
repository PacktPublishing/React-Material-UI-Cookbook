import React from 'react';

import { storiesOf } from '@storybook/react';

import withThemeProvider from './withThemeProvider';

import {
  APIDrivenAutocomplete,
  BuildingAnAutocompleteComponent,
  HighlightingSearchResults,
  SelectingAutocompleteSuggestions,
  StandaloneChipInput
} from '../Chapter12Autocomplete';

storiesOf('Chapter 12 Autocomplete', module)
  .addDecorator(withThemeProvider)
  .add('Building an Autocomplete Component', () => (
    <BuildingAnAutocompleteComponent />
  ))
  .add('Selecting Autocomplete Suggestions', () => (
    <SelectingAutocompleteSuggestions />
  ))
  .add('API Driven Autocomplete', () => <APIDrivenAutocomplete />)
  .add('Highlighting Search Results', () => (
    <HighlightingSearchResults />
  ))
  .add('Standalone Chip Input', () => <StandaloneChipInput />);
