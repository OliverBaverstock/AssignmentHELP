import React, { Component } from "react";
import "./filterControls.css";

export default class FilterControls extends Component {



    handleChange = (e, value) => {
        e.preventDefault();
        this.props.onUserInput(value);
    };
    handleTextChange = e => {
        this.handleChange(e, "name", e.target.value);
    };

  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-warning">
          <div className="col-md-12">
            <h4>
              <span>Dish Name</span>
              <input type="text" placeholder="Dish Search..." onChange={this.handleTextChange}/>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}