import React, { useEffect } from "react";
import ProfileBalance from "../../components/User/Profile-balance/ProfileBalance";
import UdpateUsername from "../../components/User/Update-user/UdpateUsername";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const firstname = useSelector(state => state.user.firstName)
  const lastname = useSelector(state => state.user.lastName)
  let navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  useEffect(() => {
    if (!isLogged) return navigate("/login");
  }, [isLogged, navigate]);

  

  return (
    <main className={classes.main}>
      <h2>Welcome back {firstname} {lastname}</h2>      
      <UdpateUsername />
      <ProfileBalance />
    </main>
  );
}

export default Profile;
