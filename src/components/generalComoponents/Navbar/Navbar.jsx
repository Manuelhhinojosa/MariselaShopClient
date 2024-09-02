import React from "react";

// production state
import data from "../../../assets/data/data";

//React Router 6
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss";

// React icons
import { CiInstagram } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      {/*  */}
      <div className="hamNavar">
        <Link className="navbarLink">more</Link>
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
