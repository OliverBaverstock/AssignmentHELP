import _ from "lodash";

class StubAPI {
    constructor() {
        this.deals = [
        {
            id: 1,
            dishName: 'Spice Bag',
            restName: 'Imperial Garden',
            price: '9.99',
            phone: '021-4832432',
            picture: './spicebag.jpg',
            upvotes: 10
        },
        {
            id: 2,
            dishName: '4in1',
            restName: 'Imperial Garden',
            price: '4.99',
            phone: '021-4832537',
            picture: './4in1.jpg',
            upvotes: 5
        },
        {
            id: 3,
            dishName: 'Munch Box',
            restName: 'Magic Wok',
            price: '19.99',
            phone: '021-4895836',
            picture: './munchbox.jpg',
            upvotes: 6
        },
        {
            id: 4,
            dishName: 'Chicken Burger Meal',
            restName: 'Rockin Joes',
            price: '6.99',
            phone: '021-4372588',
            picture: './chickburg.jpg',
            upvotes: 3
        },
        {
            id: 5,
            dishName: 'Hamburger',
            restName: 'McDonalds',
            price: '0.99',
            phone: '021-2846351',
            picture: './hamburg.jpg',
            upvotes: 12
        },
        {
            id: 6,
            dishName: 'Chicken Wrap',
            restName: 'Lismore Takeaway',
            price: '3.99',
            phone: '021-2633846',
            picture: './chickwrap.jpg',
            upvotes: 11
        },
        {
            id: 7,
            dishName: 'Extra Spice Bag',
            restName: 'Blue Jade',
            price: '9.00',
            phone: '021-9465829',
            picture: './extraspice.jpg',
            upvotes: 14
        }
        ];
    }

    delete(k) {
        let elements = _.remove(this.deals, deal => deal.id === k);
        return elements;
    }

    getAll() {
        return this.deals;
    }

    add(dishName, restName, price, phone, picture) {
        let id = 1;
        let last = _.last(this.deals);
        if (last) {
        id = last.id + 1;
        }
        let len = this.deals.length;
        let newLen = this.deals.push({
        id,
        dishName,
        restName,
        price,
        phone,
        picture,
        upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.deals, deal => deal.id === id);
        if (index !== -1) {
        this.deals[index].upvotes += 1;
        return true;
        }
        return false;
    }

    getDeal(id) {
        let index = _.findIndex(this.deals, deal => deal.phone === id);
        let result = index !== -1 ? this.deals[index] : null;
        return result;
    }

    update(key, price, phone) {
        let index = _.findIndex(this.deals, deal => deal.phone === key);
        if (index !== -1) {
        this.deals[index].phone = phone;
        this.deals[index].price = price;
        return true;
        }
        return false;
    }

    initialize(deals) {
        this.deals = deals;
    }

}

export default new StubAPI();