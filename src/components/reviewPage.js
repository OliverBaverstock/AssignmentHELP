import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash'
import api from '../dataStore/stubAPI';
import ReviewList from './reviewList'
import Form from './reviewForm'

class ReviewPage extends Component {
    addReview = (review, name) => {
        let dealID =  this.getId()
        api.addReview(dealID,review ,name );
        this.setState({});
    };

    incrementUpvote = (reviewId) => {
        let dealID =  this.getId()
        api.upvoteReview(dealID,reviewId) ;
        this.setState({});
    };

    getId = () => parseInt( this.props.match.params.deal_id, 10);

    render() {
        let dealID = this.getId()
        let deal = api.getDeal(dealID);
        let line = deal.dishName?
            <a href="/">{deal.dishName} </a> :
            <span>{deal.dishName} </span> ;
        let reviews = _.sortBy(deal.reviews,
                (review) => - review.upvotes
        );
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-md-offset-1">
                <h3>{line} </h3>
                <ReviewList reviews={reviews}
                    upvoteHandler={this.incrementUpvote } />
                <Form post={deal}  addReviewHandler={this.addReview} />
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(ReviewPage);