import React, { Component } from "react";
import Stars from "./Stars";
import Episodes from "./Episodes";

class Info extends Component {
  render() {
    return (
      <div>
        <h2>Drama | Thriller | Supernatural</h2>
        <h1>Stranger Things</h1>
        <div class="details">
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
        <p class="about">
          In 1980s Indiana, a group of young friends witness supernatural forces
          and secret government exploits. As they search for answers, the
          children unravel a series of extraordinary mysteries.
        </p>
        <Stars></Stars>
        <Episodes></Episodes>
      </div>
    );
  }
}

export default Info;
