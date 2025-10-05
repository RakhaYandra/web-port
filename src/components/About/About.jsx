import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>
          Passionate about creating innovative solutions through technology
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/aboutImage.jpg")}
            alt="Rakha Putra Pebri Yandra"
            className={styles.aboutImage}
          />
          <div className={styles.imageGlow}></div>

          {/* Quick Info Card */}
          <div className={styles.quickInfo}>
            <h4>Quick Info</h4>
            <div className={styles.quickStats}>
              <div className={styles.quickStat}>
                <span className={styles.number}>21</span>
                <span className={styles.label}>Years Old</span>
              </div>
              <div className={styles.quickStat}>
                <span className={styles.number}>5+</span>
                <span className={styles.label}>Projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.description}>
            <p>
              I&apos;m a passionate{" "}
              <span className={styles.highlight}>
                Information Systems student
              </span>{" "}
              at Telkom University with a strong focus on creating meaningful
              digital experiences. My journey in technology spans across
              multiple domains, from crafting intuitive user interfaces to
              building robust backend systems.
            </p>
            <p>
              With expertise in modern web technologies and a keen eye for
              design, I transform ideas into functional, beautiful applications
              that solve real-world problems. I believe in the power of
              technology to make life better and more efficient.
            </p>
            <p>
              Currently in my final year, I&apos;m actively seeking
              opportunities to contribute to innovative projects while
              continuing to learn and grow in the ever-evolving tech landscape.
            </p>
          </div>

          <div className={styles.personalInfo}>
            <div className={styles.personalInfoHeader}>
              <div className={styles.icon}>👤</div>
              <h3>Personal Information</h3>
            </div>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Age</span>
                <span className={styles.infoValue}>21 Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Bandung, Indonesia</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Education</span>
                <span className={styles.infoValue}>Telkom University</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Degree</span>
                <span className={styles.infoValue}>Information Systems</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Experience</span>
                <span className={styles.infoValue}>Fresh Graduate</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Availability</span>
                <span className={styles.infoValue}>Open to Work</span>
              </div>
            </div>
          </div>

          <div className={styles.aboutItems}>
            <div className={styles.aboutItemsHeader}>
              <div className={styles.icon}>⚡</div>
              <h3>What I Do</h3>
            </div>
            <div className={`${styles.aboutItem} ${styles.frontend}`}>
              <div className={styles.iconContainer}>
                <img
                  src={getImageUrl("about/cursorIcon.png")}
                  alt="Frontend Development"
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  Creating responsive, interactive user interfaces with React,
                  JavaScript, and modern CSS frameworks. Focus on performance,
                  accessibility, and exceptional user experiences.
                </p>
                <div className={styles.skills}>
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS3</span>
                  <span>HTML5</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>
            <div className={`${styles.aboutItem} ${styles.backend}`}>
              <div className={styles.iconContainer}>
                <img
                  src={getImageUrl("about/serverIcon.png")}
                  alt="Backend Development"
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  Building scalable server-side applications and APIs using
                  Node.js, Express, and various databases. Ensuring security,
                  performance, and maintainable code architecture.
                </p>
                <div className={styles.skills}>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>Flask</span>
                  <span>PostgreSQL</span>
                  <span>PHP</span>
                </div>
              </div>
            </div>
            <div className={`${styles.aboutItem} ${styles.business}`}>
              <div className={styles.iconContainer}>
                <img
                  src={getImageUrl("about/uiIcon.png")}
                  alt="Business Analysis"
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Business Analyst</h3>
                <p>
                  Analyzing business processes and identifying opportunities for
                  improvement through technology solutions. Bridging the gap
                  between business needs and technical implementation to drive
                  growth and efficiency.
                </p>
                <div className={styles.skills}>
                  <span>Business Analysis</span>
                  <span>Process Optimization</span>
                  <span>Data Analysis</span>
                  <span>Strategic Planning</span>
                  <span>Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
