import React from 'react';

import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs/react';

import {
  StatefulTables,
  SortableColumns,
  FilteringRows,
  SelectingRows,
  RowActions,
  ScrollableTables
} from '../Table';

storiesOf('Tables', module)
  .addDecorator(withKnobs)
  .add('Stateful Tables', () => <StatefulTables />)
  .add('Sortable Columns', () => <SortableColumns />)
  .add('Filtering Rows', () => <FilteringRows />)
  .add('Selecting Rows', () => <SelectingRows />)
  .add('Row Actions', () => <RowActions />)
  .add('ScrollableTables', () => <ScrollableTables />);
