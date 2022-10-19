import React, { useState } from "react";
import classes from "./UpdateUsername.module.css";
import { useSelector, useDispatch } from "react-redux";

const UdpateUsername = () => {
    const firstname = useSelector((state) => state.user.firstName);
    const lastname = useSelector((state) => state.user.lastName);
  const [editFotm, setEditForm] = useState(false);
  const [updateFirstname, setUpdateFirstname] = useState("");
  const [updateLastname, setUpdateLastname] = useState("");
  const token = useSelector((state) => state.login.token);

  const dispatch = useDispatch();

  const resetForm = () => {
    setUpdateFirstname("");
    setUpdateLastname("");
    setEditForm(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
          placeholder={firstname}
        />

        <input
          className={classes["update-input"]}
          type="text"
          id="lastname"
          onChange={lastnameHandler}
          value={updateLastname}
          label="lastname"
          placeholder={lastname}
        />
      </div>

      <div className={classes["btn-main"]}>
        <button className={classes.btn} type="submit">
          Save
        </button>
        <button
          className={classes.btn}
          onClick={() => {
            resetForm();
            setEditForm(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UdpateUsername;
