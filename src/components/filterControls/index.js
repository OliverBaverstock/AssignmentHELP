import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Filter </span>
              <input type="text" placeholder="Search Dish Name..." />
              <span> Dish Type: </span>
              <select id="dishType">
                <option value="all">All</option>
                <option value="male">Chinese</option>
                <option value="female">Indian</option>
                <option value="female">American</option>
              </select>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}