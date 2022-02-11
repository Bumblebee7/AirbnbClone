import React from "react";
import "./Header.css";
import Airbnb from "../assets/airbnb_1.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Airbnb}></img>
    </header>
  );
}

export default Header;
