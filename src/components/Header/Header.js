import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../store/slice/loginSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  
  const isLogged = useSelector((state) => state.login.isLogged);
  const firstname = useSelector((state) => state.user.firstName)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
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

      {isLogged ? (
        <div className={classes["main-nav-item"]} onClick={logoutHandler}>
          <FontAwesomeIcon icon={faCircleUser} />
          <span className={classes.firstname}>{firstname}</span>
          <FontAwesomeIcon icon={faSignOut} />
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
