import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";

const Routes = ({ history }) => {
  return (
    <Router>
      <Route exact path="/" component={() => <SignIn history={history} />} />
    </Router>
  );
};

export default Routes;
