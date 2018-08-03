import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../src/stories');
}

setOptions({ name: 'Material UI Cookbook', addonPanelInRight: true });
configure(loadStories, module);
