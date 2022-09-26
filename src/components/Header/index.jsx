import React from "react";
import "./styles.css";
import Logo from "../assets/logo.png";

function Header({ isPage, setPage }) {
  return (
    <header>
      <div className="container__header">
        <img src={Logo} alt="logo" />
        <button
          type="button"
          className="headLine"
          onClick={() => setPage(!isPage)}
        >
          início
        </button>
      </div>
    </header>
  );
}

export default Header;
