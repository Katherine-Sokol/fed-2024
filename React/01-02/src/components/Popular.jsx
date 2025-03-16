import React from "react";

const Popular = () => {
  return (
    <div>
      <div class="title">
        <h4>POPULAR THIS WEEK</h4>
        <div class="arrows">
          <button class="arrow">
            <svg
              width="9.972595"
              height="16.150002"
              viewBox="0 0 9.9726 16.15"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M8.07 16.15L9.97 14.25L3.8 8.07L9.97 1.89L8.07 0L0 8.07L8.07 16.15Z"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </button>
          <button class="arrow reverse">
            <svg
              width="9.972595"
              height="16.150002"
              viewBox="0 0 9.9726 16.15"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M8.07 16.15L9.97 14.25L3.8 8.07L9.97 1.89L8.07 0L0 8.07L8.07 16.15Z"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="movies">
        <div class="movie-list">
          <img
            src="img/img1.png"
            alt="img"
          />
          <img
            src="img/img2.png"
            alt="img"
          />
          <img
            src="img/img3.png"
            alt="img"
          />
          <img
            src="img/img4.png"
            alt="img"
          />
          <img
            src="img/img5.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
