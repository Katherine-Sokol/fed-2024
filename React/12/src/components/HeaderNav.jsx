import React from "react";
import { Link } from "react-router-dom";

function HeaderNav(props) {
  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link
        className="me-3 py-2 text-light text-decoration-none"
        to="/"
      >
        Home
      </Link>
      <Link
        className="me-3 py-2 text-light text-decoration-none"
        to="/price"
      >
        Price
      </Link>
      <Link
        className="me-3 py-2 text-light text-decoration-none"
        to="/comments"
      >
        Comments
      </Link>
    </nav>
  );
}

export default HeaderNav;
