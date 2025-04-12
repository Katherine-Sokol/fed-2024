import React from "react";
import playImage from "../assets/play-img.png";

const Episodes = () => {
  return (
    <div className="watch-episodes">
      <button>
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
