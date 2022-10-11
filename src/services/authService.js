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
export const userLogin = async (email, password) => {
  try {
    const response = await instance.post(`/login`, {
      email,
      password,
    });
    const token = await response.data.body.token;
    if (response.status === 200) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * It's a function that takes in two parameters, userDataProfile and token, and returns a response.data
 * object.
 * @param {string} - the token that is returned from the login function
 * @returns The response.data is the data that is being returned from the server.
 */
export const userProfile = async (token) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await instance.post(`/profile`, {}, config);
    const data = await response.data.body;
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * It takes in a firstname, lastname, and token, and then it makes a PUT request to the /profile
 * endpoint with the firstname, lastname, and token in the request body.
 * @param {string} - Firstname
 * @param {string} - Lastname
 * @param {string} - the token that is returned from the login function
 * @returns The response.data.body is being returned.
 */
export const userUpdate = async (firstName, lastName, token) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await instance.put("/profile", {
      config,
      data: JSON.stringify({ firstName, lastName }),
    });
    if (response.status === 200) {
      return response.status;
    }
  } catch (error) {
    console.log(error);
  }
};
