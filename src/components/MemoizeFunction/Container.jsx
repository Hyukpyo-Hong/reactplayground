import React, { Component } from "react";
import Function from "./Function";

export default class Container extends Component {
  state = {
    value: 3
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: 3
      });
    }, 3000);
  }

  render() {
    return <Function value={this.state.value} />;
  }
}
