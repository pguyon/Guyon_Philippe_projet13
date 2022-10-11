import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  const isLogged = useSelector((state) => state.login.isLogged);
  useEffect(() => {
    if (!isLogged) return navigate("/login");
  }, [isLogged, navigate]);


  // const firstName = useSelector((state) => state.user.firstName);
  // const lastName = useSelector((state) => state.user.lastName);

  // console.log(firstName);
  // console.log(lastName);

  return <div>Vous êtes connecté</div>;
}

export default Profile;
