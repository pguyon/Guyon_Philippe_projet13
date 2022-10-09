import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUSerProfile(state, action) {
      const userProfile = action.payload;
      state.email = userProfile.email;
      state.firstname = userProfile.firstname;
      state.lastname = userProfile.lastname;
      state.createdAt = userProfile.createdAt;
      state.updatedAt = userProfile.action;
      state.id = userProfile.id;
    },
    updateUserProfile(state, action) {
      const updateProfile = action.payload;
      const updateDate = new Date();
      state.firstname = updateProfile.firstname;
      state.lastname = updateProfile.lastname;
      state.updatedAt = updateDate.toISOString();
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
