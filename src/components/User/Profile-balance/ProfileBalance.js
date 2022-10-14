import React from "react";
import classes from "./ProfileBalance.module.css";
import { mockedProfile } from "../../../mock/mockedProfile";

const ProfileBalance = () => {
  return (
    <section className={classes.main}>
      {mockedProfile.map((item) => (
        <div key={item.id} className={classes['main-balance']}>
          <div>
            <p>{item.title}</p>
            <p>{item.amount}</p>
            <p>{item.amountDescription}</p>
          </div>
          <span className={classes.btn}>View transactions</span>
        </div>
      ))}
    </section>
  );
};

export default ProfileBalance;
