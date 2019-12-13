import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Header from "./components/header/";
import DealList from "./components/dealList/";
import FilterControls from './components/filterControls/';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as api from './api';
import _ from 'lodash';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { search: "", deals: [{}], login:false};
  }

async componentDidMount () {
  this._isMounted=true
  try{
        const resp = await api.getAll();
        if (this._isMounted){
        this.setState({
                 deals: resp,
                 login: false,
               });
              }

     } catch (e){
       if (this._isMounted) this.setState({
                login: true
              });
     }
};

incrementUpvote = async (id) => {
  try{
  await api.upvote(id).then
         var upvotedDeal = _.find(this.state.deals, deal=>deal.id === id);
         upvotedDeal.upvotes++;  
         this.setState({})} catch(e){
           alert(`failed to upvote post ${id}: ${e}`);
      }
};


 deleteDeal = (id) => {
  api.deleteDeal(id).then(resp =>{
    const deal = {"id":resp.id};
    this.setState({deals: this.state.deals.splice([deal])});
  })                       
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

      const { login } = this.state;

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
        {login && (<Redirect to='/login'/>)}
      </div>
    );
  }
}