import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Dish Name</span>
              <input type="text" placeholder="Dish Search..." />
              <span> Food Type: </span>
              <select id="foodType">
                <option value="all">All</option>
                <option value="chinese">Chinese</option>
                <option value="indian">Indian</option>
                <option value="americane">American</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}