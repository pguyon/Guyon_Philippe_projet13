import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { userLogin, userProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../store/slice/userSlice";
import { login } from "../../store/slice/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const isLogged = useSelector((state) => state.login.isLogged);

  useEffect(() => {
    if (isLogged) return navigate("/profile");
  }, [isLogged, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const token = await userLogin(email, password);
    if (token) {
      dispatch(login(token));
      const userData = await getUserProfile(token);
      userData && dispatch(getUserProfile(userData));
      navigate("/profile");
    } else {
      setIsError(true);
    }
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
        <form onSubmit={submitHandler}>
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

          <button className={classes["sign-in-button"]} type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
