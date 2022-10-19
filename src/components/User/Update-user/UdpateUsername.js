import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate } from "../../../services/authService";
import { updateUserProfile } from "../../../store/slice/userSlice";

const UdpateUsername = () => {
  //   const firstname = useSelector((state) => state.user.firstName);
  //   const lastname = useSelector((state) => state.user.lastName);
  //   const [editFotm, setEditForm] = useState(false);
  const [updateFirstname, setUpdateFirstname] = useState("");
  const [updateLastname, setUpdateLastname] = useState("");
  const token = useSelector((state) => state.login.token);

  const dispatch = useDispatch();

  const resetForm = () => {
    setUpdateFirstname("");
    setUpdateLastname("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const update = await userUpdate(updateFirstname, updateLastname, token);
    if (update) {
      dispatch(
        updateUserProfile({
          firstname: updateFirstname,
          lastname: updateLastname,
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
