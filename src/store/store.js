import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { loginSlice } from "./slice/loginSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, login: loginSlice.reducer },
});

export default store;
