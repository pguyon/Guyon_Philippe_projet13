import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useDispatch } from "react-redux";
import { userUpdate } from "../../../services/authService";
import { updateUserProfile } from "../../../store/slice/userSlice";

const UdpateUsername = () => {
  const [updateFirstname, setUpdateFirstname] = useState("");
  const [updateLastname, setUpdateLastname] = useState("");
  const token = localStorage.getItem("user");
  const dispatch = useDispatch();

  const resetForm = () => {
    setUpdateFirstname("");
    setUpdateLastname("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const update = await userUpdate(token, updateFirstname, updateLastname);
    if (update) {
      dispatch(
        updateUserProfile({
          firstName: updateFirstname,
          lastName: updateLastname,
        })
      );
    }
    resetForm();
  };

  const firstnameHandler = (e) => {
    setUpdateFirstname(e.target.value);
  };

  const lastnameHandler = (e) => {
    setUpdateLastname(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes["update-form"]}>
      <div className={classes["input-main"]}>
        <input
          className={classes["update-input"]}
          type="text"
          id="firstname"
          onChange={firstnameHandler}
          value={updateFirstname}
          label="firstname"
        />

        <input
          className={classes["update-input"]}
          type="text"
          id="lastname"
          onChange={lastnameHandler}
          value={updateLastname}
          label="lastname"
        />
      </div>

      <div className={classes["btn-main"]}>
        <button className={classes.btn} type="submit">
          Save
        </button>
        <button className={classes.btn} onClick={resetForm}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UdpateUsername;
