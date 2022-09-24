import React from "react";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import { mockedFeatures } from "../../mock/mockedFeatures";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <Hero />
      <section>
        <h2 className={classes["sry-only"]}>Features</h2>
        <div className={classes.features}>
          {mockedFeatures.map((feature, index) => (
            <Feature element={feature} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
