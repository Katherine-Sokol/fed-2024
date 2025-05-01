import React from "react";
import Stars from "./Stars";
import Episodes from "./Episodes";

const Info = (props) => {
  return (
    <div>
      <h2>{props.genre.join(" | ")}</h2>
      <h1>{props.title}</h1>
      <div className="details">
        <p>
          <strong>2019 </strong>
        </p>
        <p>
          <strong>DIRECTOR:</strong> Shawn Levy
        </p>
        <p>
          <strong>seasons:</strong> 3 (5 Episodes)
        </p>
      </div>
      <p className="about">{props.about}</p>

      <Stars count={Number(3)}></Stars>

      <Episodes></Episodes>
    </div>
  );
};

export default Info;
