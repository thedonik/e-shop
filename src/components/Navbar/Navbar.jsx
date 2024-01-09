import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/" className="img-link">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <Link to="/katalog" className="katalog">
        <RxHamburgerMenu className="katalog-icon" />
        <span className="katalog-text">Каталог</span>
      </Link>
      <form className="header-form">
        <input type="text" placeholder="Найти товар" className="header-inp" />
        <AiOutlineSearch className="search-icon" />
      </form>
      <Link to="/liked" className="liked">
        <AiOutlineHeart className="liked-icon" />
        <span className="liked-text">Избранное</span>
      </Link>
      <Link to="/cart" className="cart">
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="cart-text">Корзина</span>
      </Link>
      <Link to="/add" className="add">
        <span className="add-text">Add</span>
      </Link>
      <Link to="/signup" className="signup">
        <span className="signup-btn">Sign up</span>
      </Link>
    </div>
  );
};

export default Navbar;
