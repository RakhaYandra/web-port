import { useState, useEffect, useRef } from "react";

import styles from "./Projects.module.css";

import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Get all projects from all categories
  const allProjects = Object.values(projectsData.categories).flat();

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

  const filteredProjects = () => {
    if (filter === "all") {
      return allProjects;
    } else if (["Solo", "Group", "Final Project"].includes(filter)) {
      return projectsData.categories[filter] || [];
    } else {
      // Filter by technology/skill
      return allProjects.filter((project) =>
        project.skills.some((skill) => skill.toLowerCase() === filter)
      );
    }
  };

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
          {/* Project Type Categories */}
          <button
            className={`${styles.filterBtn} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          {projectsData.projectTypes.map((type) => (
            <button
              key={type.name}
              className={`${styles.filterBtn} ${
                filter === type.name ? styles.active : ""
              }`}
              onClick={() => setFilter(type.name)}
              title={type.description}
            >
              <span className={styles.filterIcon}>{type.icon}</span>
              {type.name}
            </button>
          ))}

          {/* Technology Filters */}
          <div className={styles.filterDivider}></div>
          {["react", "javascript", "python", "ai", "ml"].map((tech) => (
            <button
              key={tech}
              className={`${styles.filterBtn} ${styles.techFilter} ${
                filter === tech ? styles.active : ""
              }`}
              onClick={() => setFilter(tech)}
            >
              {tech === "ai"
                ? "AI"
                : tech === "ml"
                ? "ML"
                : tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.projects}>
        {filteredProjects().map((project, id) => (
          <div
            key={`${project.title}-${id}`}
            style={{ "--delay": `${id * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects().length === 0 && (
        <div className={styles.noProjects}>
          <p>No projects found for this category.</p>
        </div>
      )}
    </section>
  );
};
