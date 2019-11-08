import React, { Component } from "react";
import Deal from "../deal/";
import './dealList.css';

export default class DealList extends Component {
  render() {
    let dealCards = this.props.deals.map(
        (deal,index) => 
            <Deal key={index} 
                deal={deal} 
                upvoteHandler={this.props.upvoteHandler} /> 
        );
    return (
      <div className="container-fluid deals bg-info">
        <div className="row">{dealCards}</div>
      </div>
    );
  }
}