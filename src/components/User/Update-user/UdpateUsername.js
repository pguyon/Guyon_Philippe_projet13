import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useSelector, useDispatch } from "react-redux";

const UdpateUsername = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.user.firstName);
  const lastname = useSelector((state) => state.user.lastName);
  const { updateFirstname, setUpdateFirstname } = useState("");
  const { updateLastname, setUpdateLastname } = useState("");
  // const  = useSelector(state => state.user.email)

  const submitHandler = () => {};

  const firstnameHandler = (e) => {
    setUpdateLastname(e.target.value);
  };

  const lastnameHandler = (e) => {
    setUpdateLastname(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["input-wrapper"]}>
        <input
          type="text"
          id="firstname"
          onChange={firstnameHandler}
          defaultValue={firstname}
          label="Change firstname"
        />
      </div>
      <div className={classes["input-wrapper"]}>
        <input
          type="text"
          id="lastname"
          onChange={lastnameHandler}
          defaultValue={lastname}
          label="Change lastname"
        />
      </div>

      <button className={classes.btn} type="submit">
        Save
      </button>
      <button className={classes.btn}>Cancel</button>
    </form>
  );
};

export default UdpateUsername;
