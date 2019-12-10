import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../src/components/header'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Deal from '../src/components/deal/'
import DealList from '../src/components/dealList/'
import DealsForm from '../src/components/dealsForm/';
import FilterControls from '../src/components/filterControls/'
import ReviewForm from "../src/components/reviewForm";
import Review from "../src/components/review";
import ReviewList from "../src/components/reviewList";

const sample = {
  dishName: 'Spice Bag',
  restName: 'Imperial Garden',
  price: '9.99',
  phone: '021-4762839',
  picture: './spicebag.jpg',
  upvotes: 10
}

const review = {
  id: 1,
  author: "Joe Bloggs",
  review: "I agree with .....",
  upvotes: 10
};

storiesOf("Deals List App/Header", module).add("default", () => (
  <Header  noDeals={10} />
));

storiesOf("Deals List App/Deal List", module).add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <DealList deals={samples}/>
});

storiesOf("Deals List App/Deals Form", module).add("default", () => <DealsForm />);

storiesOf("Deals List App/Deal", module).add("default", () => ( 
  <Deal deal={sample} deleteHandler={action('Delete confirmed') }/>
));

storiesOf("Deals List App/Filter Controls", module).add("default", () => (
  <FilterControls onUserInput={action('Search criteria changes') }/>
));

storiesOf("Deals List App/Review page/Review Form", module).add("default", () => (
  <ReviewForm post={sample} addReviewHandler={action("review added")} />
));

storiesOf("Deals List App/Review page/Review", module).add("default", () => (
  <Review upvoteHandler={action("upvoted")} review={review} />
));

storiesOf("Deals List App/Review page/Review list", module).add("default", () => {
  const defaultReviews = [
    review,
    { ...review, author: "Jane Smith", upvotes: 3, id: 2 },
    { ...review, comment: "On the other hand", id: 3 },
    { ...review, author: "Jill Dwyer", upvotes: 5, id: 4 }
  ];
  return (
    <ReviewList upvoteHandler={action("upvoted")} comments={defaultReviews} />
  );
});