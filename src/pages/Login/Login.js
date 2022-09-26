import React from "react";
import classes from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <main className={`${classes.main} ${classes["bg-dark"]}`}>
      <section className={classes["sign-in-content"]}>
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className={classes["input-wrapper"]}>
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={classes["input-wrapper"]}>
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={classes["input-remember"]}>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="./user.html" className={classes["sign-in-button"]}>
            Sign In
          </a>
          {/* <button className={classes["sign-in-button"]}>Sign In</button> */}
        </form>
      </section>
    </main>
  );
};

export default Login;
