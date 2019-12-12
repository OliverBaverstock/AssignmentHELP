import React, { Component } from "react";
import Header from "./components/header/";
import DealList from "./components/dealList/";
import FilterControls from './components/filterControls/';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import _ from 'lodash';
import * as api from './api';

export default class App extends Component {

  state = { search: "", deals: [{}]};

  componentDidMount() {
    api.getAll().then(resp => {
      console.log(resp)
        this.setState({
            deals: resp
        });
    }).catch(console.error);
};

incrementUpvote = (id) => {
  api.upvote(id).then(resp=> {
         var upvotedDeal = _.find(this.state.deals, deal=>deal.id === id);
         upvotedDeal.upvotes++;  
         this.setState({})
       }) ;
};

 deleteDeal = (key) => {
  api.deleteDeal(key); 
  this.setState({});                          
}; 

handleChange = (type, value) => {
  type === "name"
  ? this.setState({ search: value })
  : this.setState({ foodType: value });
};


  render() {

    console.log("hello world")
    
    const deals = _.sortBy(this.state.deals, deal =>
      deal.upvotes);

    let filteredDeals = deals.filter(deals => {
      const name = `${deals.dishName}`;
      console.log(deals)
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
      });
      let sortedDeals = _.sortBy(filteredDeals, deals => deals.dishName);

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