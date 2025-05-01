import React from "react";
import { useEffect, useState } from "react";
import Comment from "./Comment";

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
            <Comment
              key={index}
              index={index}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            ></Comment>
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
