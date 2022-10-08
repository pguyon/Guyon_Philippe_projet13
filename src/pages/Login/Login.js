import React, { useState } from "react";
import classes from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import apiService from "../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    apiService.userLogin(email, password);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className={`${classes.main} ${classes["bg-dark"]}`}>
      <section className={classes["sign-in-content"]}>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className={classes["input-wrapper"]}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={emailHandler} />
          </div>
          <div className={classes["input-wrapper"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={passwordHandler} />
          </div>
          <div className={classes["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <a href="./user.html" className={classes["sign-in-button"]}>
            Sign In
          </a> */}
          <button className={classes["sign-in-button"]} onClick={submitHandler}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
