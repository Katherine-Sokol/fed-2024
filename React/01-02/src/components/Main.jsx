import React from "react";
import Info from "./Info";
import Popular from "./Popular";

const Main = () => {
  return (
    <>
      <Info
        genre="Drama | Thriller | Supernatural"
        title="Stranger Things"
        about="In 1980s Indiana, a group of young friends witness supernatural forces
        and secret government exploits. As they search for answers, the children
        unravel a series of extraordinary mysteries."
      ></Info>
      <Popular></Popular>
    </>
  );
};

export default Main;
