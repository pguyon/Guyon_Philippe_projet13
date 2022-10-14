import React from "react";
import classes from "./ProfileBalance.module.css";
import { mockedProfile } from "../../../mock/mockedProfile";

const ProfileBalance = () => {
  return (
    <section className={classes.main}>
      {mockedProfile.map((item) => (
        <div key={item.id} className={classes['main-balance']}>
          <div>
            <p className={classes.description}>{item.title}</p>
            <p className={classes.amount}>{item.amount}</p>
            <p className={classes.description}>{item.amountDescription}</p>
          </div>
          <span className={classes.btn}>View transactions</span>
        </div>
      ))}
    </section>
  );
};

export default ProfileBalance;
