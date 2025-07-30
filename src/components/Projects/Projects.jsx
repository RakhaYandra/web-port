import React, { useState, useEffect, useRef } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
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

  // Extract unique categories from projects
  const categories = [
    "all",
    ...new Set(
      projects.flatMap((project) =>
        project.skills.map((skill) => skill.toLowerCase())
      )
    ),
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.skills.some((skill) => skill.toLowerCase() === filter)
        );

  return (
    <section className={styles.container} id="projects" ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={`${styles.title} ${isVisible ? styles.slideUp : ""}`}>
          Featured Projects
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.slideUp : ""}`}>
          Innovative solutions crafted with passion and precision
        </p>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.filters}>
          {["all", "react", "javascript", "python", "ai", "ml"].map(
            (category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  filter === category ? styles.active : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "ai"
                  ? "AI & ML"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <div
            key={`${project.title}-${id}`}
            style={{ "--delay": `${id * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.noProjects}>
          <p>No projects found for this category.</p>
        </div>
      )}
    </section>
  );
};
