import { useState, useEffect, useRef } from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="experience" ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={`${styles.title} ${isVisible ? styles.slideUp : ""}`}>
          Professional Journey
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.slideUp : ""}`}>
          Crafting digital experiences through meaningful collaborations
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.experienceGrid}>
          {history.map((historyItem, id) => {
            return (
              <div
                key={id}
                className={`${styles.experienceCard} ${
                  isVisible ? styles.slideUp : ""
                }`}
                style={{ "--delay": `${id * 0.2}s` }}
              >
                {/* Liquid Glass Layers */}
                <div className={styles.liquidLayer1}></div>
                <div className={styles.liquidLayer2}></div>
                <div className={styles.liquidLayer3}></div>

                {/* Card Glow Effect */}
                <div className={styles.cardGlow}></div>

                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                        className={styles.companyLogo}
                      />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.position}>{historyItem.role}</h3>
                      <h4 className={styles.company}>
                        {historyItem.organisation}
                      </h4>
                      <span className={styles.duration}>
                        {`${historyItem.startDate} - ${historyItem.endDate}`}
                      </span>
                    </div>
                  </div>
                  <ul className={styles.responsibilities}>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                  <div className={styles.techStack}>
                    {/* Add tech stack if available in data */}
                    {historyItem.techStack &&
                      historyItem.techStack.map((tech, id) => (
                        <span key={id} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
