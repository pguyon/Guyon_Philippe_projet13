import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  token: "",
};

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
