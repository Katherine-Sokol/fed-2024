import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons/faStar";

const Star = (props) => {
  if (props.className == "active") {
    return (
      <FontAwesomeIcon
        icon={solidStar}
        style={{ color: "yellow" }}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={regularStar}
        style={{ color: "yellow" }}
      />
    );
  }
};

export default Star;
