import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import DealsForm from "./components/dealsForm";
import ReviewPage from "./components/reviewPage";

const Router = (props) => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <Switch>
          <Route path="/dealsForm" component={DealsForm} />
          <Route path="/deals/:deal_id" component={ReviewPage} />
          <Route exact path="/" component={App} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
