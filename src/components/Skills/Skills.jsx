import React, { useState, useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const sectionRef = useRef(null);

  const skillCategories = {
    Frontend: ["HTML", "CSS", "React"],
    Backend: ["Node", "PHP", "Laravel", "Python", "Flask", "JavaScript"],
    Database: ["MySQL", "PostgreSQL"],
    Tools: ["Git", "Figma"],
  };

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
    <section className={styles.container} id="skills" ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.codePattern}></div>
        <div className={styles.floatingShapes}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={styles.shape}
              style={{
                "--delay": `${i * 0.5}s`,
                "--duration": `${8 + i * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <div className={`${styles.badge} ${isVisible ? styles.fadeInUp : ""}`}>
          <span>Skills & Technologies</span>
        </div>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeInUp : ""}`}>
          My Technical
          <span className={styles.titleAccent}> Arsenal</span>
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeInUp : ""}`}>
          Technologies and tools I use to bring digital ideas to life
        </p>
      </div>

      {/* Category Tabs */}
      <div
        className={`${styles.categoryTabs} ${isVisible ? styles.fadeInUp : ""}`}
      >
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            className={`${styles.categoryTab} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className={`${styles.skillsGrid} ${isVisible ? styles.fadeInUp : ""}`}
      >
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <div
            key={category}
            className={`${styles.skillCategory} ${
              activeCategory === category ? styles.activeCategory : ""
            }`}
          >
            <div className={styles.skillsList}>
              {categorySkills.map((skillName, index) => {
                const skill = skills.find((s) => s.title === skillName);
                return skill ? (
                  <div
                    key={skill.title}
                    className={styles.skillCard}
                    style={{ "--delay": `${index * 0.1}s` }}
                  >
                    <div className={styles.skillIcon}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                      <div className={styles.skillGlow}></div>
                    </div>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.title}</span>
                      <div className={styles.skillLevel}>
                        <div className={styles.skillBar}>
                          <div
                            className={styles.skillProgress}
                            style={{
                              "--progress": `${skill.proficiency || 80}%`,
                            }}
                          ></div>
                        </div>
                        <span className={styles.skillPercentage}>
                          {skill.proficiency || 80}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Overview */}
      <div
        className={`${styles.proficiencySection} ${
          isVisible ? styles.fadeInUp : ""
        }`}
      >
        <h3 className={styles.proficiencyTitle}>Proficiency Overview</h3>
        <div className={styles.proficiencyBars}>
          <div className={styles.proficiencyItem}>
            <div className={styles.proficiencyHeader}>
              <span>Frontend Development</span>
              <span>75%</span>
            </div>
            <div className={styles.proficiencyBar}>
              <div
                className={styles.proficiencyFill}
                style={{ "--width": "90%" }}
              ></div>
            </div>
          </div>
          <div className={styles.proficiencyItem}>
            <div className={styles.proficiencyHeader}>
              <span>UI/UX Design</span>
              <span>55%</span>
            </div>
            <div className={styles.proficiencyBar}>
              <div
                className={styles.proficiencyFill}
                style={{ "--width": "85%" }}
              ></div>
            </div>
          </div>
          <div className={styles.proficiencyItem}>
            <div className={styles.proficiencyHeader}>
              <span>Backend Development</span>
              <span>75%</span>
            </div>
            <div className={styles.proficiencyBar}>
              <div
                className={styles.proficiencyFill}
                style={{ "--width": "75%" }}
              ></div>
            </div>
          </div>
          <div className={styles.proficiencyItem}>
            <div className={styles.proficiencyHeader}>
              <span>Database Management</span>
              <span>60%</span>
            </div>
            <div className={styles.proficiencyBar}>
              <div
                className={styles.proficiencyFill}
                style={{ "--width": "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Cloud */}
      <div
        className={`${styles.techCloud} ${isVisible ? styles.fadeInUp : ""}`}
      >
        <div className={styles.cloudTitle}>
          Technologies I Love Working With
        </div>
        <div className={styles.techItems}>
          {[
            "React",
            "JavaScript",
            "Node.js",
            "CSS3",
            "HTML5",
            "PHP",
            "MySQL",
            "Git",
            "Figma",
            "Laravel",
          ].map((tech, index) => (
            <div
              key={tech}
              className={styles.techBubble}
              style={{
                "--delay": `${index * 0.1}s`,
                "--size": `${Math.random() * 0.5 + 0.8}rem`,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
