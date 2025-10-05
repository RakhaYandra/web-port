import { useState, useEffect, useRef } from "react";
import styles from "./Education.module.css";

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
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

  const educationData = [
    {
      id: "university",
      institution: "Telkom University",
      degree: "Bachelor of Information Systems",
      major: "Information Systems",
      period: "2021 - 2025",
      location: "Bandung, Indonesia",
      status: "Graduated with Honors",
      gpa: "3.81/4.00",
      description:
        "Focused on software engineering principles, web development, and computer science fundamentals. Active in programming competitions and tech communities.",
      highlights: [
        "Software Engineering: Capstone Project",
        "Enterprise Application Integration",
        "Website Application Development",
        "Information Systems Analysis and Design",
        "System Testing and Implementation",
        "User Experience Design",
        "Interaction Design",
        "Computer Network Management",
        "Algorithms and Programming",
      ],
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "highschool",
      institution: "SMK Telkom 1 Medan",
      degree: "High School Diploma",
      major: "Telecommunications Engineering",
      period: "2018 - 2021",
      location: "Medan, Indonesia",
      status: "Graduated",
      gpa: "-",
      description:
        "Specialized in Telecommunications Engineering with focus on Electronics and Network Systems. Developed strong technical foundation and problem-solving skills.",
      highlights: [
        "Electronics & Telecommunications",
        "Fiber Optics Technology",
        "Radio Communication Systems",
        "Fiber to the Home (FTTH)",
        "Office Applications",
      ],
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "2023 Student Creativity Program (PKM) Grant Recipient",
      description:
        "Contributed as a product designer in a team developing a secure digital lock payment system using IoT and mobile technologies.",
    },
    {
      icon: "💻",
      title: "Cum Laude Graduate",
      description:
        "Graduated with honors, demonstrating exceptional academic performance and a strong commitment to excellence.",
    },
  ];

  return (
    <section id="education" className={styles.container} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.content}>
        {/* Section Header */}
        <div className={styles.header}>
          <div
            className={`${styles.badge} ${isVisible ? styles.fadeInUp : ""}`}
          >
            <div className={styles.badgeIcon}>🎓</div>
            <span>Academic Journey</span>
          </div>

          <h2
            className={`${styles.title} ${isVisible ? styles.slideInLeft : ""}`}
          >
            Education
            <span className={styles.titleAccent}> & Achievements</span>
          </h2>

          <p
            className={`${styles.subtitle} ${
              isVisible ? styles.slideInRight : ""
            }`}
          >
            My academic path has equipped me with a solid foundation in computer
            science, software engineering, and analytical thinking, fueling my
            drive for innovation and technology.
          </p>
        </div>
        {/* Education Timeline */}
        <div className={styles.timeline}>
          {educationData.map((education, index) => (
            <div
              key={education.id}
              className={`${styles.timelineItem} ${
                isVisible ? styles.slideUp : ""
              }`}
              style={{
                "--delay": `${index * 0.2}s`,
                "--accent-color": education.color,
              }}
              onMouseEnter={() => setActiveCard(education.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Timeline Line */}
              <div className={styles.timelineLine}>
                <div className={styles.timelineDot}></div>
              </div>

              {/* Education Card */}
              <div className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.institutionInfo}>
                    <h3 className={styles.institution}>
                      {education.institution}
                    </h3>
                    <div className={styles.location}>{education.location}</div>
                  </div>
                  <div className={styles.periodBadge}>
                    <span className={styles.period}>{education.period}</span>
                    <div
                      className={`${styles.statusIndicator} ${
                        education.status === "Current"
                          ? styles.active
                          : styles.completed
                      }`}
                    >
                      {education.status}
                    </div>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.degreeInfo}>
                    <h4 className={styles.degree}>{education.degree}</h4>
                    <p className={styles.major}>{education.major}</p>
                    {education.gpa !== "-" && (
                      <div className={styles.gpa}>GPA: {education.gpa}</div>
                    )}
                  </div>

                  <p className={styles.description}>{education.description}</p>

                  <div className={styles.highlights}>
                    <h5 className={styles.highlightsTitle}>Key Subjects:</h5>
                    <div className={styles.highlightsList}>
                      {education.highlights.map((highlight, idx) => (
                        <span key={idx} className={styles.highlightItem}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Glow Effect */}
                {activeCard === education.id && (
                  <div className={styles.cardGlow}></div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Achievements Section */}
        <div
          className={`${styles.achievementsSection} ${
            isVisible ? styles.fadeIn : ""
          }`}
        >
          <h3 className={styles.achievementsTitle}>Academic Achievements</h3>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${styles.achievementCard} ${
                  isVisible ? styles.bounceIn : ""
                }`}
                style={{ "--delay": `${0.6 + index * 0.1}s` }}
              >
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                <p className={styles.achievementDescription}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Current Focus */}
        <div
          className={`${styles.currentFocus} ${
            isVisible ? styles.slideUp : ""
          }`}
        >
          <div className={styles.focusContent}>
            <h3 className={styles.focusTitle}>Currently Focusing On</h3>
            <p className={styles.focusDescription}>
              Advancing my knowledge in modern web technologies, cloud
              computing, and software architecture while completing my degree
              with excellence.
            </p>
            <div className={styles.focusAreas}>
              <span className={styles.focusArea}>Advanced Web Development</span>
              <span className={styles.focusArea}>Software System Analysis</span>
              <span className={styles.focusArea}>Software Architecture</span>
              <span className={styles.focusArea}>Business Analysis</span>
              <span className={styles.focusArea}>Automation Tester</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
