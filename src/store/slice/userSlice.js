import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfile(state, action) {
      const userProfile = action.payload;
      state.email = userProfile.email;
      state.firstName = userProfile.firstName;
      state.lastName = userProfile.lastName;
      state.createdAt = userProfile.createdAt;
      state.updatedAt = userProfile.action;
      state.id = userProfile.id;
    },
    updateUserProfile(state, action) {
      const updateProfile = action.payload;
      const updateDate = new Date();
      state.firstName = updateProfile.firstName;
      state.lastName = updateProfile.lastName;
      state.updatedAt = updateDate.toISOString();
    },
  },
});

export const { getUserProfile, updateUserProfile } = userSlice.actions;
