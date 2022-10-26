import { createSlice } from "@reduxjs/toolkit";

/* Setting the initial state of the reducer. */
const initialState = {
  isLogged: false,
  token: "",
};

/* Creating a slice of the redux store. */
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.token = localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = loginSlice.actions;
