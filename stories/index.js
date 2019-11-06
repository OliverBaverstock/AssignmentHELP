import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FilterControls from '../src/components/filterControls/'
import Deal from '../src/components/deal/'
import DealList from '../src/components/dealList/'
import DealsForm from '../src/components/dealsForm/';

const sample = {
  dishName: 'Spice Bag',
  restName: 'Imperial Garden',
  price: '9.99',
  picture: {thumbnail: './spicebag.jpg'}
}

storiesOf("Deals List App/Header", module).add("default", () => (
  <Header noDeals={10} />
));

storiesOf("Deals List App/Filter Controls", module).add("default", () => (
  <FilterControls />
));  

storiesOf("Deals List App/Deal", module).add("default", () => ( 
  <Deal deal={sample}/>
)); 

storiesOf("Deals List App/Deal List", module).add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <DealList deals={samples}/>
});

storiesOf("Deals List App/Deals Form", module).add("default", () => <DealsForm />);