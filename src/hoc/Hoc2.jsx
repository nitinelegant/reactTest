import React, { Fragment, Component } from "react";
import SignupHeader from "./Header/SignupHeader.jsx";
import Footer from "./Footer/Footer.jsx";
const UpdateComponent = (Wcomponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Fragment>
          <SignupHeader {...this.props} />
          <Wcomponent {...this.props} />
          <Footer {...this.props} />
        </Fragment>
      );
    }
  };
};

export default UpdateComponent;
