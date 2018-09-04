import { configure } from '@storybook/react';
import CarRentalScreen from '../src/containers/CarRentalScreen';

function loadStories() {
  require('../src/stories/CarRental');
}

configure(loadStories, module);
