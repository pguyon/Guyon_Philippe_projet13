import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userProfile } from "../../services/authService";

function Profile() {

  const token = localStorage.getItem('user')
  console.log(token);
  // const firstName = useSelector((state) => state.user.firstName);
  // const lastName = useSelector((state) => state.user.lastName);

  // console.log(firstName);
  // console.log(lastName);

  return <div>Vous êtes connecté</div>;
}

export default Profile;
