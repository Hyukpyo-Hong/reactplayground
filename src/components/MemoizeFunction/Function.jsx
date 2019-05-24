import React from "react";

export default React.memo(props => {
  console.log("React.memo do shallow comparison. Function Rendered");
  return <div>{props.value}</div>;
});
