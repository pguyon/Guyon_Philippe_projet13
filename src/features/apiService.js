import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
});

/**
 * This function sends a POST request to the server with the user's login credentials, and if the
 * response is successful, it saves the user's data to local storage.
 * @param {object} - userData 
 * @returns The response.data is being returned.
 */
const userLogin = async (userData) => {
  const response = await instance.post(`/login`, userData);

  if (response.ok) {
    localStorage.setItem("argentBank", JSON.stringify(response.data));
  }
  return response.data;
};

/**
 * It's a function that takes in two parameters, userDataProfile and token, and returns a response.data
 * object.
 * @param {object} - userProfileData
 * @param {string} - the token that is returned from the login function
 * @returns The response.data is the data that is being returned from the server.
 */
const userProfile = async (userProfileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.put(`/profile`, userProfileData, config);
  return response.data.body;
};

const apiService = {
  userLogin,
  userProfile,
};

export default apiService;
