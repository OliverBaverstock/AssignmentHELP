import dealModel from './api/deals/dealsModel';

const deals = [
    {
        id: 1,
        dishName: 'Spice Bag',
        restName: 'Imperial Garden',
        price: '9.99',
        phone: '021-4832432',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/spicebag.jpeg',
        reviews: [],
        upvotes: 10
    },
    {
        id: 2,
        dishName: '4in1',
        restName: 'Imperial Garden',
        price: '4.99',
        phone: '021-4832537',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/4in1.jpeg',
        reviews: [],
        upvotes: 5
    },
    {
        id: 3,
        dishName: 'Munch Box',
        restName: 'Magic Wok',
        price: '19.99',
        phone: '021-4895836',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/munchbox.jpg',
        reviews: [],
        upvotes: 6
    },
    {
        id: 4,
        dishName: 'Chicken Burger Meal',
        restName: 'Rockin Joes',
        price: '6.99',
        phone: '021-4372588',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/chickenburger.jpg',
        reviews: [],
        upvotes: 3
    },
    {
        id: 5,
        dishName: 'Hamburger',
        restName: 'McDonalds',
        price: '0.99',
        phone: '021-2846351',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/hamburger.jpeg',
        reviews: [],
        upvotes: 12
    },
    {
        id: 6,
        dishName: 'Chicken Wrap',
        restName: 'Lismore Takeaway',
        price: '3.99',
        phone: '021-2633846',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/chickenwrap.jpg',
        reviews: [],
        upvotes: 11
    },
    {
        id: 7,
        dishName: 'Extra Spice Bag',
        restName: 'Blue Jade',
        price: '9.00',
        phone: '021-9465829',
        picture: 'https://webappdevassignmentimages.s3-eu-west-1.amazonaws.com/extraspicebag.jpg',
        reviews: [],
        upvotes: 14
    }
    ];
export const loadDeals = () => {
dealModel.find({}).remove(function() {
    dealModel.collection.insert(deals, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Deal Data`);
    } else {
      console.info(`${deals.length} deals were successfully stored.`);
    }
  });
});
};