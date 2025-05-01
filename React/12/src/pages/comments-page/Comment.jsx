import React from "react";

function Comment({ index, name, email, body }) {
  return (
    <div
      className="card m-1"
      style={{ width: "18rem" }}
      key={index}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex flex-column mb-5">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle text-body-secondary">{email}</h6>
          <p className="card-text">{body}</p>
        </div>

        <button
          type="button"
          className="btn btn-dark"
        >
          See more
        </button>
      </div>
    </div>
  );
}

export default Comment;
