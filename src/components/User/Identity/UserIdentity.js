import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from './UserIdentity.module.css'

const UserIdentity = () => {
  let navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  useEffect(() => {
    if (!isLogged) return navigate("/login");
  }, [isLogged, navigate]);

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  return <div>
    <h2>Welcome back</h2>
    Bonjour {`${firstName} ${lastName}`}
    </div>;
};

export default UserIdentity;
