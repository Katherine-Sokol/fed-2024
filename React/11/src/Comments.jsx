import React from "react";
import { useEffect, useState } from "react";

function Comments({ title }) {
  const [comments, setComments] = useState([]);
  const [visability, setVisability] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((data) => setComments(data.slice(0, visability)));
  }, [visability]);

  function loadMore() {
    setVisability((visability) => visability + 5);
  }

  return (
    <div>
      <h3 className="text-center">{title}</h3>
      <div
        className="p-2 text-center"
        onClick={loadMore}
      >
        <button className="btn btn-success">Завантажити ще коментарі</button>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        {comments.map((comment, index) => {
          return (
            <div
              className="card m-1"
              style={{ width: "18rem" }}
              key={index}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex flex-column mb-5">
                  <h5 className="card-title">{comment.name}</h5>
                  <h6 className="card-subtitle text-body-secondary">
                    {comment.email}
                  </h6>
                  <p className="card-text">{comment.body}</p>
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
        })}
      </div>
      <div
        className="p-2 text-center"
        onClick={loadMore}
      >
        <button className="btn btn-success">Завантажити ще коментарі</button>
      </div>
    </div>
  );
}

export default Comments;
