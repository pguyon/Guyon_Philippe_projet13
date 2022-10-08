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

  if (response.status === 200) {
    localStorage.setItem("user", JSON.stringify(response.data.body.token));
  }
  console.log(response.data);
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

/**
 * It takes in a firstname, lastname, and token, and then it makes a PUT request to the /profile
 * endpoint with the firstname, lastname, and token in the request body.
 * @param {string} - Firstname
 * @param {string} - Lastname
 * @param {string} - the token that is returned from the login function
 * @returns The response.data.body is being returned.
 */
const userUpdate = async (firstname, lastname, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.put(
    `/profile`,
    { firstname, lastname },
    config
  );

  return response.data.body;
};

const logout = () => {
  localStorage.removeItem("user");
};

const apiService = {
  userLogin,
  userProfile,
  userUpdate,
  logout,
};

export default apiService;
