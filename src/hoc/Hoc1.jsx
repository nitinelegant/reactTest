import React, { Fragment, Component } from "react";
import { AuthHeader } from "../components/authentication/index";
import { Footer } from "../common/index";
import "./hoc1.css"
const HOC1 = (Wcomponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Fragment>
          <AuthHeader {...this.props} />
          <div className="wrapper">
            <Wcomponent {...this.props} />
          </div>
          <Footer {...this.props} />
        </Fragment>
      );
    }
  };
};

export default HOC1;
