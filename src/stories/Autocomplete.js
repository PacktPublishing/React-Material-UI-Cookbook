import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  APIDrivenAutocomplete,
  BuildingAnAutocompleteComponent,
  HighlightingSearchResults,
  SelectingAutocompleteSuggestions,
  StandaloneChipInput
} from '../Autocomplete';

storiesOf('Autocomplete', module)
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
