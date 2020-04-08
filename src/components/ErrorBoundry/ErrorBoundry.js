import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";

class ErrorBoundry extends Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.state.error ? <ErrorIndicator /> : this.props.children;
  }
}

export default ErrorBoundry;
