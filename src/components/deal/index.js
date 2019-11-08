import React, { Component } from "react";
import "./deal.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Deal extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.deal.id);
  render() {
    return (
        <div className="card col-lg-3">
          <img  className="card-img-top image-fluid rounded"
            alt={this.props.deal.dishName}
            src={this.props.deal.picture}
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
                <span className="ptr" onClick={this.handleVote}>
                <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
                {` ${this.props.deal.upvotes}`}
            </span>
              <button type="button" className={"btn btn-danger w-100"}>
                {"Delete"}
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default Deal;