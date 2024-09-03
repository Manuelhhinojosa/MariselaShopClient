import React from "react";

// Reacty hooks
import { useState } from "react";

// production state and functions
import data from "../../../assets/data/data";

//React Router 6
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss";

// React icons
import { CiInstagram } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

export const Navbar = () => {
  // state for production
  const [toggleNavbar, setToggleNavbar] = useState(true);

  // sets toggleNavbar value accordin to the size of the scren
  const handleResize = () => {
    if (window.innerWidth >= 600) {
      setToggleNavbar(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <div className="navbarContainer">
      <div className="hamNavar">
        <p onClick={() => setToggleNavbar(!toggleNavbar)}>
          {toggleNavbar ? <IoIosCloseCircle /> : "menu"}
        </p>
      </div>
      <div
        className="hamNavbarList"
        style={toggleNavbar ? { display: "flex" } : { display: "none" }}
      >
        <Link
          onClick={() => setToggleNavbar(false)}
          className="navbarLink"
          to="/"
        >
          home
        </Link>
        <Link
          className="navbarLink"
          to="/shop"
          onClick={() => setToggleNavbar(false)}
        >
          shop
        </Link>
        <Link
          className="navbarLink"
          to="/about"
          onClick={() => setToggleNavbar(false)}
        >
          about
        </Link>
        <Link
          className="navbarLink"
          to="/faq"
          onClick={() => setToggleNavbar(false)}
        >
          faq
        </Link>
        <Link
          className="navbarLink"
          to="/reviews"
          onClick={() => setToggleNavbar(false)}
        >
          reviews
        </Link>
        <Link
          className="navbarLink"
          to="/contact"
          onClick={() => setToggleNavbar(false)}
        >
          contact
        </Link>
        <a
          onClick={() => setToggleNavbar(false)}
          className="navbarLink"
          href="https://www.instagram.com/"
          target="_"
        >
          <CiInstagram className="icon" />
        </a>
        <Link
          className="navbarLink"
          to="/cart"
          onClick={() => setToggleNavbar(false)}
        >
          <CiShoppingCart className="icon" /> <span>{`${data.cartCount}`}</span>
        </Link>
      </div>

      <div>
        <Link className="navbarLink" to="./">
          home
        </Link>
        <Link className="navbarLink" to="./shop">
          shop
        </Link>
        <Link className="navbarLink" to="./about">
          about
        </Link>
        <Link className="navbarLink" to="./faq">
          faq
        </Link>
        <Link className="navbarLink" to="./reviews">
          reviews
        </Link>
      </div>

      <div className="navbarImgContainer">RIGA</div>

      <div>
        <Link className="navbarLink" to="./contact">
          contact
        </Link>
        <a className="navbarLink" href="https://www.instagram.com/" target="_">
          <CiInstagram className="icon" />
        </a>
        <Link className="navbarLink" to="./cart">
          <CiShoppingCart className="icon" /> <sup>{data.cartCount}</sup>
        </Link>
      </div>
    </div>
  );
};
