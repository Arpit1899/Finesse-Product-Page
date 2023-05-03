import React from "react";
import "./Header.css";
import { UilSearch, UilShoppingCart } from "@iconscout/react-unicons";
import logo from "./finesse.png";
const Header = ({ counter }) => {
  return (
    <header className="header">
      <UilSearch className="search-icon" size={25} />

      <img src={logo} alt="logo" className="logo" />

      <span className="cart-counter1">CART[{counter}]</span>
    </header>
  );
};

export default Header;
