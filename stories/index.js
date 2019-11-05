import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

storiesOf("Deals List App/Header", module).add("default", () => (
  <Header noDeals={10} />
));
