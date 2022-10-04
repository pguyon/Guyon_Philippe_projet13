import axios from "axios";

const baseURL = `http://localhost:3001/api/v1/user/`;

const userLogin = async (userdata) => {
  const response = await axios.post(`${baseURL}/login`, userdata);

  if (response.ok) {
    localStorage.setItem("argentBank", JSON.stringify(response.data));
  }
  return response.data
};


const apiService = {
    userLogin
}


export default apiService;