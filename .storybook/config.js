import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'Material UI Cookbook',
    addonPanelInRight: true
  })
);

configure(() => require('../src/stories'), module);
