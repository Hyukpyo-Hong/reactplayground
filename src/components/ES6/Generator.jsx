import React from "react";

function* generator() {
  yield "1st";
  yield "2nd";
  yield "3rd";
  yield "4th";
  yield "5th";
  return "DONE";
}

const gen = generator();

export default () => {
  const items = [];
  for (const el of gen) {
    items.push(<div key={el}>{el}</div>);
  }
  return (
    <div>
      <div>ES6 Generator </div>
      {items}
    </div>
  );
};
