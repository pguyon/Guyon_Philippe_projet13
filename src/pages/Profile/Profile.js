import React from "react";


function Profile() {
  const token = localStorage.getItem("user");

  console.log(token);

  if (!token) {
    return <p>Vous devez être connecté pour accèder à cette page</p>;
  } else {
    return <div>Vous êtes connecté</div>;
  }
}

export default Profile;
