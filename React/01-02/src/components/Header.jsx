import React from "react";
import logo from "../assets/logo.png";
import searchBtn from "../assets/search-btn.svg";
import userPhoto from "../assets/user-photo.png";

const Header = () => {
  return (
    <header>
      <div>
        <a
          className="logo"
          href="#"
        >
          <img
            src={logo}
            alt="logo"
          />
        </a>
        <span className="date">| Friday July 8th</span>
      </div>
      <div>
        <button className="search-btn">
          <img
            src={searchBtn}
            alt="search-btn"
          />
        </button>
        <button className="user">
          <img
            src={userPhoto}
            alt="user-photo"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
