import React from "react";

//React Router 6
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
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
        <a className="navbarLink" href="">
          IG
        </a>
        <Link className="navbarLink" to="./cart">
          cart
        </Link>
      </div>
    </div>
  );
};
