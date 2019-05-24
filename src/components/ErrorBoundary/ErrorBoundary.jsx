import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log("ERROR:", error);
    console.log("INFO:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>You got a error!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
