import React from "react";
import logo from "../assets/logo.png";
import searchBtn from "../assets/search-btn.svg";
import userPhoto from "../assets/user-photo.png";
import CurrentDate from "./CurrentDate";
import { useState, useEffect } from "react";

const Header = () => {
  let date = new Date(Date.now());

  let [showSearch, setShowSearch] = useState(false);
  function changeShowSearch() {
    setShowSearch((showSearch) => !showSearch);
    if (showSearch == true) {
      setShowResult((showResult) => (showResult = false));
    }
  }
  let [result, setResult] = useState("");
  let [showResult, setShowResult] = useState(false);
  function changeShowResult(event) {
    if (event.keyCode == 13) {
      if (event.target.value.length > 3) {
        if (showResult == false) {
          setShowResult((showResult) => !showResult);
        }
        setResult((result) => (result = event.target.value));
      } else {
        setShowResult((showResult) => (showResult = false));
      }
    }
  }

  useEffect(() => {
    if (showSearch) {
      console.log("Поле пошуку відкрито!");
    } else {
      console.log("Поле пошуку задкрито!");
    }
  });

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
        <CurrentDate date={`| ${date.toDateString()}`}></CurrentDate>
      </div>
      <div>
        {showSearch && (
          <input
            type="text"
            onKeyDown={changeShowResult}
            className="search-input"
          ></input>
        )}
        {showResult && <div className="search-result">User find: {result}</div>}
        <button
          onClick={changeShowSearch}
          className="search-btn"
        >
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
