import React from "react";
import classes from "./ProfileBalance.module.css";
import { mockedProfile } from "../../../mock/mockedProfile";

const ProfileBalance = () => {
  return (
    <section>
      {mockedProfile.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.amount}</p>
          <p>{item.amountDescription}</p>
        </div>
      ))}
    </section>
  );
};

export default ProfileBalance;
