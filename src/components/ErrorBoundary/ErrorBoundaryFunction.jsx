import React from "react";

export default ({ testName }) => {
  if (testName === "error") {
    throw new Error(
      "Error! Click x at top Right to see the fallback message. ErrorBoundary only works for component lifecycloe such as constructor and render, not for error inside event handler which needs try catch block"
    );
  }
  return <div>{testName}</div>;
};
