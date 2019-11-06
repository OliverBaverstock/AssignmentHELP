import React, { Component } from "react";
import "./deal.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Deal extends Component {
  render() {
    return (
      <div className="container">
        <div className="card col-lg-4">
          <img  className="card-img-top image-fluid rounded"
            alt={this.props.deal.dishName}
            src={this.props.deal.picture.thumbnail}
          />
          <div className="card-body">
            <h1 className="card-title text-danger">
              {`${this.props.deal.dishName}`}
            </h1>
            <h4 key="restName" className="text-dark ">
              <FontAwesomeIcon icon={["fas", "utensils"]} />
              <i class="fas fa-utensils"></i>
              <span> {this.props.deal.restName}</span>
            </h4>
            <h3 key="price" className="text-success">
              <FontAwesomeIcon icon={["fas", "euro-sign"]} />
              <i class="fas fa-euro-sign"></i>
              <span> {this.props.deal.price} </span>
            </h3>
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button type="button" className={"btn btn-danger w-100"}>
                {"Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Deal;