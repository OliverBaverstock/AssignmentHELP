import React, { Component } from "react";

class Header extends Component {
  render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-4">
              <div className="page-header">
                <h1>
                  <a href='#link'>Add Deal </a>
                   -   
                  <a href='/'> Deal List <span className="badge badge-pill badge-success">{this.props.noDeals}</span></a>
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default Header;