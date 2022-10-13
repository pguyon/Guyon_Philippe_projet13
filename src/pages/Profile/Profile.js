import React from "react";
import UserIdentity from "../../components/User/Identity/UserIdentity";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <main className={classes.main}>
      <UserIdentity />
    </main>
  );
}

export default Profile;
