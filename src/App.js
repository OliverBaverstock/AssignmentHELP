import React, { Component } from "react";
import Header from "./components/header/";
import DealList from "./components/dealList/";
import FilterControls from './components/filterControls/';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import api from './dataStore/stubAPI';

export default class App extends Component {

  state = { search: ""};

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

    console.log("hello world")
    
    let deals = api.getAll();
    let filteredDeals = deals.filter(deal => {
      const name = `${deal.dishName}`;
      console.log(deal)
      return name.search(this.state.search.toLowerCase()) !== -1;
      });
      let sortedDeals = _.sortBy(filteredDeals, deal => deal.dishName);

    return (
      <div className="jumbotron">
        <Header noDeals={sortedDeals.length} />
        <FilterControls onUserInput={this.handleChange}/>
        <DealList deals={sortedDeals} 
            deleteHandler={this.deleteDeal}
            upvoteHandler={this.incrementUpvote} />
      </div>
    );
  }
}