import React from "react";
import stylesWrapper from "./stylesWrapper";

const OneButton = props => {
  return <button style={props.styles}>Buttone</button>;
};

export default stylesWrapper(OneButton);
