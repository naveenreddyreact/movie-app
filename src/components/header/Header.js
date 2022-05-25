import React from "react";
import { Link } from "react-router-dom";
import MovieAppLogo from "../../images/user.jpg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">N-Movie</div>
      </Link>
      <div className="user-img">
        <img src={MovieAppLogo} alt="MovieApp-Logo" />
      </div>
    </div>
  );
};

export default Header;
