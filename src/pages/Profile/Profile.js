import React, { useEffect } from "react";
import apiService from "../../services/authService";


function Profile() {
  const token = localStorage.getItem("user");
  
const validToken = token.replace(/['"]+/g, '')
  // console.log(token);
  
  
  useEffect(()=>{
    apiService.userProfile(validToken)
  },[validToken])

  

  if (!token) {
    return <p>Vous devez être connecté pour accèder à cette page</p>;
  } else {
    return <div>Vous êtes connecté</div>;
  }
}

export default Profile;
