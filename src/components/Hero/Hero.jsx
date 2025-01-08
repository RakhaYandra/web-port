import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rakha Putra Pebri Yandra</h1>
        <p className={styles.description}>
          I'm a final-year Information Systems student at Telkom University,
          specializing in UI/UX design and software development. Let's connect!
        </p>
        <a
          href="mailto:rakhaputrapebriyandra272@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
