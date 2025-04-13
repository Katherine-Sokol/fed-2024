import React from "react";
import Info from "./Info";
import Popular from "./Popular";

const Main = () => {
  const genres = ["Drama", "Thriller", "Supernatural"];
  return (
    <main>
      <Info
        genre={genres}
        title="Stranger Things"
        about="In 1980s Indiana, a group of young friends witness supernatural forces
        and secret government exploits. As they search for answers, the children
        unravel a series of extraordinary mysteries."
      ></Info>
      <Popular></Popular>
    </main>
  );
};

export default Main;
