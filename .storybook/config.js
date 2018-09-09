import { configure } from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import CarRentalScreen from '../src/containers/CarRentalScreen';

function loadStories() {
  require('../src/stories/CarRental');
}

configure(loadStories, module);
//configureViewport();
