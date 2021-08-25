import React from "react";
import { withRouter } from "react-router-dom";


//This file is overriding the hierarchy issue in React, this will allow the page to start at the correct spot when switching pages

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
