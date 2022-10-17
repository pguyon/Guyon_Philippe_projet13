import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useSelector, useDispatch } from "react-redux";

const UdpateUsername = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstName);
  const lastname = useSelector((state) => state.user.lastName);
  const [updateFirstname, setUpdateFirstname] = useState("");
  const [updateLastname, setUpdateLastname] = useState("");
  // const  = useSelector(state => state.user.email)

  const submitHandler = () => {};

  const firstnameHandler = (e) => {
    setUpdateLastname(e.target.value);
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
          defaultValue={firstname}
          label="Change firstname"
        />

        <input
          className={classes["update-input"]}
          type="text"
          id="lastname"
          onChange={lastnameHandler}
          defaultValue={lastname}
          label="Change lastname"
        />
      </div>

      <div className={classes["btn-main"]}>
        <button className={classes.btn} type="submit">
          Save
        </button>
        <button className={classes.btn}>Cancel</button>
      </div>
    </form>
  );
};

export default UdpateUsername;
