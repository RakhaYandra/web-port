import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: {
    title,
    imageSrc,
    description,
    skills,
    demo,
    source,
    workType,
    duration,
    teamSize,
    advisor,
  },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`${title} project screenshot`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtn}
              aria-label={`View ${title} demo`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              View Demo
            </a>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayBtn}
              aria-label={`View ${title} source code`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Source
            </a>
          </div>
        </div>
        <div className={styles.imageGlow}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.projectMeta}>
            <span className={styles.workType}>{workType}</span>
            {duration && <span className={styles.duration}>{duration}</span>}
          </div>
          <div className={styles.links}>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              aria-label={`View ${title} demo`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              aria-label={`View ${title} source code`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        {/* Additional project details */}
        {(teamSize || advisor) && (
          <div className={styles.additionalInfo}>
            {teamSize && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Team:</span>
                <span className={styles.infoValue}>{teamSize}</span>
              </div>
            )}
            {advisor && (
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Advisor:</span>
                <span className={styles.infoValue}>{advisor}</span>
              </div>
            )}
          </div>
        )}

        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <span key={id} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryAction}
          >
            Live Demo
          </a>
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryAction}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};
