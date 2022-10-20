import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userUpdate } from "../../../services/authService";
import { updateUserProfile } from "../../../store/slice/userSlice";

const UdpateUsername = () => {
  const firstname = useSelector((state) => state.user.firstName);
  const lastname = useSelector((state) => state.user.lastName);
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

    const inputFirstname = updateFirstname === "" ? firstname : updateFirstname;
    const inputLastname = updateLastname === "" ? lastname : updateLastname;

    const update = await userUpdate(token, inputFirstname, inputLastname);
    if (update) {
      dispatch(
        updateUserProfile({
          firstName: inputFirstname,
          lastName: inputLastname,
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
          label="firstname"
          placeholder={firstname}
        />

        <input
          className={classes["update-input"]}
          type="text"
          id="lastname"
          onChange={lastnameHandler}
          label="lastname"
          placeholder={lastname}
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
