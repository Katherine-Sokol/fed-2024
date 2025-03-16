import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <a
          class="logo"
          href="#"
        >
          <img
            src="img/logo.png"
            alt="logo"
          />
        </a>
        <span class="date">| Friday July 8th</span>
      </div>
      <div>
        <button class="search-btn">
          <img
            src="img/search-btn.svg"
            alt="search-btn"
          />
        </button>
        <button class="user">
          <img
            src="img/user-photo.png"
            alt="user-photo"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
