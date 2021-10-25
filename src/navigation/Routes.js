import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "../components/authentication/Login";

const Routes = ({ history }) => {
  return (
    <Router>
      <Route exact path="/" component={() => <Login history={history} />} />
    </Router>
  );
};

export default Routes;
