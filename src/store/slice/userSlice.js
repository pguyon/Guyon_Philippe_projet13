import { createSlice } from "@reduxjs/toolkit";

/* Setting the initial state of the user profile. */
const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

/* Creating a slice of the Redux store. */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  /* A reducer function that is called when the action `getUserProfile` is dispatched. */
    getUserProfile(state, action) {
      const userProfile = action.payload;
      state.email = userProfile.email;
      state.firstName = userProfile.firstName;
      state.lastName = userProfile.lastName;
      state.createdAt = userProfile.createdAt;
      state.updatedAt = userProfile.action;
      state.id = userProfile.id;
    },
 /* A reducer function that is called when the action `updateUserProfile` is dispatched. */
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
