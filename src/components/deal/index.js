import React, { Component, Fragment } from "react";
import "./deal.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";

import * as api from '../../api';
import { Link } from 'react-router-dom';

class Deal extends Component {
    state = {
        status: "",
        price: this.props.deal.price,
        phone: this.props.deal.phone,
        previousDetails: {
        price: this.props.deal.price,
        phone: this.props.deal.phone,
        }
    };

    handleEdit = () => this.setState({ status: "edit" });

    handleCancel = () => {
        let { price, phone } = this.state.previousDetails;
        this.setState({ status: "", price, phone });
      };

      handlePriceChange = e => this.setState({ price: e.target.value });
      handlePhoneChange = e => this.setState({ phone: e.target.value });

      handleSave = e => {
        e.preventDefault();
        let updatedPrice = this.state.price.trim();
        let updatedPhone = this.state.phone.trim();
        if (!updatedPrice || !updatedPhone) {
        return;
        }
        let { price, phone } = this.state;
        this.setState({ status: "", previousDetails: { price, phone }});
        api.update(this.state.previousDetails.phone, updatedPrice, updatedPhone);
    };          
    
    handleDelete = () =>  this.setState({ status : 'del'} );

    handleConfirm = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.id);
        };

    handleVote = () =>  this.props.upvoteHandler(this.props.deal.id);
  render() {

    let activeButtons = buttons.normal;
    let leftButtonHandler = this.handleEdit;
    let rightButtonHandler = this.handleDelete;
    let cardColor = "bg-white";
    if (this.state.status === "edit") {
      cardColor = "bg-primary";
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
    }
    else if (this.state.status === 'del' ) {
        cardColor = "bg-warning";
        activeButtons = buttons.delete;
        leftButtonHandler = this.handleCancel;
        rightButtonHandler = this.handleConfirm;
    }
    return (
        <div className="col-lg-3 d-flex">
        <div className={`card  ${cardColor}`}>
        <Link to={`/deals/${this.props.deal.id}` }>
          <img  className="card-img-top image-fluid rounded"
            alt={this.props.deal.dishName}
            src={this.props.deal.picture}
          />
          </Link>
          <div className="card-body">
            <h1 className="card-title text-danger">
              {`${this.props.deal.dishName}`}
            </h1>
            <h4 key="restName" className="text-dark ">
              <FontAwesomeIcon icon={["fas", "utensils"]} />
              <i class="fas fa-utensils"></i>
              <span> {this.props.deal.restName}</span>
            </h4>

            {this.state.status === "edit" ? (
              <Fragment>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                  />
                </p>
                </Fragment>
            ) : (
                <Fragment>
            <h6 key="phone" className="text-dark">
                  <FontAwesomeIcon icon={["fas", "phone"]} />
                  <span> {this.props.deal.phone} </span>
                </h6>
            <h6 key="price" className="text-success">
              <FontAwesomeIcon icon={["fas", "euro-sign"]} />
              <i class="fas fa-euro-sign"></i>
              <span> {this.props.deal.price} </span>
            </h6>
            </Fragment>
            )}
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
            <button type="button" className={"btn btn-default w-100" +
            activeButtons.leftButtonColor}
            onClick={leftButtonHandler}>
              {activeButtons.leftButtonVal}
              </button>
              <button type="button" className={"btn btn-danger w-100" + activeButtons.rightButtonColor}
                onClick={rightButtonHandler}>
                {activeButtons.rightButtonVal}
              </button>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Deal;