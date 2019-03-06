import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  StatefulExpansionPanels,
  FormattingPanelHeaders,
  ScrollablePanelContent,
  LazyLoadingPanelContent
} from '../Chapter05ExpansionPanel';

storiesOf('Chapter 5 Expansion Panels', module)
  .add('Stateful Expansion Panels', () => <StatefulExpansionPanels />)
  .add('Formatting Panel Headers', () => <FormattingPanelHeaders />)
  .add('Scrollable Panel Content', () => <ScrollablePanelContent />)
  .add('Lazy Loading Panel Content', () => (
    <LazyLoadingPanelContent />
  ));
