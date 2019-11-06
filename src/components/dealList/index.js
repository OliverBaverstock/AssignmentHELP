import React, { Component } from "react";
import Deal from "../deal/";
import './dealList.css';

export default class DealList extends Component {
  render() {
    const dealCards = this.props.deals.map(c => (
      <Deal key={c.phone} deal={c} />
    ));
    return (
      <div className="container-fluid deals bg-info">
        <div className="row">{dealCards}</div>
      </div>
    );
  }
}