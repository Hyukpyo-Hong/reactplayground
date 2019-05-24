import React, { PureComponent } from "react";

let interval = null;
let counter = 0;
export default class PureComponents extends PureComponent {
  constructor() {
    super();
    this.state = {
      c: 1
    };
  }
  componentDidMount() {
    interval = setInterval(() => {
      if (counter === 4) clearInterval(interval);
      this.setState((prevState, props) => ({
        c: 5
      }));
      counter += 1;
      console.info(
        "State Updated. PureComponent doesn't re-render if props/state has same based on Shallow comparison"
      );
    }, 3);
  }

  render() {
    console.log("Render");
    return <div />;
  }
}
