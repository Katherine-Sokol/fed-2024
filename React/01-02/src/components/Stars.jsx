import React from "react";
import Star from "./Star";

const Stars = (props) => {
  let count = props.count;
  let array = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= count) {
      array[i] = <Star className="active"></Star>;
    } else {
      array[i] = <Star></Star>;
    }
  }
  return <div className="stars">{array}</div>;
};

export default Stars;
