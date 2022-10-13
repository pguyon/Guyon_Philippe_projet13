import React from "react";
import UserIdentity from "../../components/User/Identity/UserIdentity";
import ProfileBalance from "../../components/User/Profile-balance/ProfileBalance";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <main className={classes.main}>
      <UserIdentity />
      <ProfileBalance />
    </main>
  );
}

export default Profile;
