import React, { Component } from "react";
import "./filterControls.css"

export default class FilterControls extends Component {

    state = { search: "", gender: "all" };

    handleChange = (e, type, value) => {
        e.preventDefault();
        this.props.onUserInput(type, value);
    };
    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };
    handleGenderChange = e => {
        this.handleChange(e, "foodType", e.target.value);
    };

  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Dish Name</span>
              <input type="text" placeholder="Dish Search..." onChange={this.handleTextChange}/>
              <span> Food Type: </span>
              <select id="foodType" onChange={this.handleGenderChange}>
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