import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import {
  StatefulTables,
  SortableColumns,
  FilteringRows,
  SelectingRows,
  RowActions
} from '../Chapter07Table';

storiesOf('Chapter 7 Tables', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemeProvider)
  .add('Stateful Tables', () => <StatefulTables />)
  .add('Sortable Columns', () => <SortableColumns />)
  .add('Filtering Rows', () => <FilteringRows />)
  .add('Selecting Rows', () => <SelectingRows />)
  .add('Row Actions', () => <RowActions />);
