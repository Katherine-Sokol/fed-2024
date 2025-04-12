import React from "react";
import movieImg1 from "../assets/img1.png";
import movieImg2 from "../assets/img2.png";
import movieImg3 from "../assets/img3.png";
import movieImg4 from "../assets/img4.png";
import movieImg5 from "../assets/img5.png";
import AgeLimit from "./AgeLimit";

const Popular = () => {
  return (
    <div>
      <div className="title">
        <h4>POPULAR THIS WEEK</h4>
        <div className="arrows">
          <button className="arrow">
            <svg
              width="9.972595"
              height="16.150002"
              viewBox="0 0 9.9726 16.15"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M8.07 16.15L9.97 14.25L3.8 8.07L9.97 1.89L8.07 0L0 8.07L8.07 16.15Z"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <button className="arrow reverse">
            <svg
              width="9.972595"
              height="16.150002"
              viewBox="0 0 9.9726 16.15"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M8.07 16.15L9.97 14.25L3.8 8.07L9.97 1.89L8.07 0L0 8.07L8.07 16.15Z"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="movies">
        <div className="movie-list">
          <img
            src={movieImg1}
            alt="img"
          />
          <img
            src={movieImg2}
            alt="img"
          />
          <img
            src={movieImg3}
            alt="img"
          />
          <img
            src={movieImg4}
            alt="img"
          />
          <img
            src={movieImg5}
            alt="img"
          />
        </div>
        <AgeLimit age="16+"></AgeLimit>
      </div>
    </div>
  );
};

export default Popular;
