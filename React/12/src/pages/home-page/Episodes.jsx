import React from "react";
import playImage from "../../assets/play-img.png";

const Episodes = () => {
  const stream = function () {
    alert("Stream now!");
  };

  return (
    <div className="watch-episodes">
      <button onClick={stream}>
        STREAM NOW
        <img
          src={playImage}
          alt="play-img"
        />
      </button>
      <button>ALL EPISODES</button>
    </div>
  );
};

export default Episodes;
