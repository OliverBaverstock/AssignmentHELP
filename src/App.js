import React, { Component } from "react";
import Header from "./components/header/";
import DealList from "./components/dealList/";
import FilterControls from "./components/filterControls/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    const sample = {
      dishName: 'Spice Bag',
      restName: 'Imperial Garden',
      price: '9.99',
      picture: {thumbnail: './spicebag.jpg'}
    };

    const deals = [sample, sample, sample, sample, sample];

    return (
      <div className="jumbotron">
        <Header noDeals={5} />
        <FilterControls />
        <DealList deals={deals} />
      </div>
    );
  }
}

export default App;