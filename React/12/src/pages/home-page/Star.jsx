import React from "react";

const Star = (props) => {
  if (props.className == "active") {
    return (
      <svg
        className="active"
        width="29.439941"
        height="28.000000"
        viewBox="0 0 29.4399 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M14.72 0L10.17 9.22L0 10.69L7.35 17.87L5.62 28L14.72 23.22L23.81 28L22.08 17.87L29.43 10.7L19.27 9.22L14.72 0Z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="29.439941"
        height="28.000000"
        viewBox="0 0 29.4399 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M14.72 0L10.17 9.22L0 10.69L7.35 17.87L5.62 28L14.72 23.22L23.81 28L22.08 17.87L29.43 10.7L19.27 9.22L14.72 0Z"
        />
      </svg>
    );
  }
};

export default Star;
