import React, { Component } from 'react';
import './dealsForm.css';

export default class Form extends Component {
    state = { dishName: '', restName: '', price: '',phone: '', picture: ''};
    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a deal</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Dish Name"></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Restaurant Name"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Price"></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Phone"></input>
            </div>
            <div className="form-group">
                <input type="file"
                  className="form-control"
                placeholder="Add Image"></input>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}