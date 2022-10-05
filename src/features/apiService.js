import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1/user",
});

/**
 * This function sends a POST request to the server with the user's login credentials, and if the
 * response is successful, it saves the user's data to local storage.
 * @param {string} - user's email
 * @param {string} - user's password
 * @returns The response.data is being returned.
 */
const userLogin = async (email, password) => {
  const response = await instance.post(`/login`, {
    email,
    password,
  });

  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

/**
 * It's a function that takes in two parameters, userDataProfile and token, and returns a response.data
 * object.
 * @param {string} - the token that is returned from the login function
 * @returns The response.data is the data that is being returned from the server.
 */
const userProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.post(`/profile`, config);
  return response.data.body;
};

const logout = () => {
  localStorage.removeItem("user");
};

const apiService = {
  userLogin,
  userProfile,
  logout,
};

export default apiService;
