// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import "./Header.css"; // Import the CSS file
import cartIcon from "../assets/trolley.png";

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      <div className="header-title">Store</div>
      <div className="header-search">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="header-cart">
        <Link to="/cart">
          <div className="cart-icon-container">
            <img src={cartIcon} alt="Cart" />
            {cartItemsCount > 0 && (
              <div className="cart-badge">{cartItemsCount}</div>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
