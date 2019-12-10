import React, { Component } from "react";

export default class Form extends Component {
  state = { review: "", name: "" };

  handleReviewChange = e => {
    this.setState({ review: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let review = this.state.review.trim();
    let name = this.state.name.trim();
    if (!review) {
      return;
    }
    this.props.addReviewHandler(review, name);
    this.setState({ review: "", name: "" });
  };

  render() {
    return (
      <form style={{ marginTop: "30px" }}>
        <h3>Add a new review</h3>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            value={this.state.review}
            onChange={this.handleReviewChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}