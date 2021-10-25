import React from "react";
import { HOC1 } from "../../hoc/index";
import { withRouter } from "react-router";
import "./login.css";

const Login = () => {
  return (
    <div className="login_background_image">
      <div className="login_card">
        <p>SkoolFirst</p>
      </div>
    </div>
  );
};

export default withRouter(HOC1(Login));
