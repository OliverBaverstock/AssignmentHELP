import React, { Component } from "react";
import Header from "./components/header/";
import DealList from "./components/dealList/";
import FilterControls from './components/filterControls/'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import api from './dataStore/stubAPI';

export default class App extends Component {

  state = { search: "", foodType: "all" };

  incrementUpvote = (id) => {
    api.upvote(id) ;
    this.setState({});
};

deleteDeal = (key) => {
  api.delete(key); 
  this.setState({});                          
};

handleChange = (type, value) => {
  type === "name"
  ? this.setState({ search: value })
  : this.setState({ foodType: value });
};
  render() {
    let deals = _.sortBy(api.getAll(), post => -post.upvotes);

    let filteredDeals = deals.filter(c => {
      const name = `${c.dishname}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
      });
      filteredDeals =
      this.state.foodType === "all"
          ? filteredDeals
          : filteredDeals.filter(c => c.foodType === this.state.foodType);
      let sortedDeals = _.sortBy(filteredDeals, c => c.dishName);

    return (
      <div className="jumbotron">
        <Header noDeals={5} />
        <FilterControls />
        <DealList deals={deals} 
            deleteHandler={this.deleteDeal}
            upvoteHandler={this.incrementUpvote} />
      </div>
    );
  }
}