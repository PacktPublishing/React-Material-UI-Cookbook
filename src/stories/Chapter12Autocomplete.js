import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  APIDrivenAutocomplete,
  BuildingAnAutocompleteComponent,
  HighlightingSearchResults,
  SelectingAutocompleteSuggestions,
  StandaloneChipInput
} from '../Chapter12Autocomplete';

storiesOf('Chapter 12 Autocomplete', module)
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
