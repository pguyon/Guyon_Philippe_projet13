import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/authService";

const Header = () => {
  const token = localStorage.getItem("user");
  const navigate = useNavigate();

  const logoutHandler = () => {
    apiService.logout();
    navigate("/");
  };
  return (
    <nav className={classes["main-nav"]}>
      <Link to="/" className={classes["main-nav-logo"]}>
        <img
          className={classes["main-nav-logo-image"]}
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className={classes["sr-only"]}>Argent Bank</h1>
      </Link>

      {token ? (
        <div className={classes["main-nav-item"]} onClick={logoutHandler}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span className={classes["main-nav-item"]}>Sign out</span>
        </div>
      ) : (
        <Link to="/login" className={classes["main-nav-item"]}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span>Sign In</span>
        </Link>
      )}
    </nav>
  );
};

export default Header;
