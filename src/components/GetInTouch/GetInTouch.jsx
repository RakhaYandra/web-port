import { useState, useEffect, useRef } from "react";
import styles from "./GetInTouch.module.css";
import { getImageUrl } from "../../utils";

export const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      id: "email",
      platform: "Email",
      handle: "rakhaputrapebriyandra272@gmail.com",
      description: "Drop me a message anytime",
      icon: "contact/emailIcon.png",
      url: "mailto:rakhaputrapebriyandra272@gmail.com",
      color: "#22c55e",
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      handle: "+62 853-5803-2274",
      description: "Let's chat instantly",
      icon: "contact/whatsappIcon.png",
      url: "https://wa.me/6285385032274",
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: "rakhaputrapebriyandra",
      description: "Connect professionally",
      icon: "contact/linkedinIcon.png",
      url: "https://www.linkedin.com/in/rakhaputrapebriyandra",
      color: "#16a34a",
      bgGradient: "from-green-600/20 to-green-500/20",
    },
    {
      id: "github",
      platform: "GitHub",
      handle: "RakhaYandra",
      description: "Check out my code",
      icon: "contact/githubIcon.png",
      url: "https://www.github.com/RakhaYandra",
      color: "#3b82f6",
      bgGradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@rakhayandra_",
      description: "Follow my journey",
      icon: "contact/instagramIcon.png",
      url: "https://www.instagram.com/rakhayandra_",
      color: "#22c55e",
      bgGradient: "from-green-500/20 to-teal-500/20",
    },
  ];

  return (
    <section id="contact" className={styles.wrapper} ref={sectionRef}>
      {/* Floating Background Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div
            className={`${styles.availabilityBadge} ${
              isVisible ? styles.fadeInUp : ""
            }`}
          >
            <div className={styles.pulseIndicator}></div>
            <span>🚀 Ready for new challenges</span>
          </div>

          <h2
            className={`${styles.mainTitle} ${
              isVisible ? styles.slideInLeft : ""
            }`}
          >
            Let's Create Something
            <span className={styles.highlightText}> Extraordinary</span>
          </h2>

          <p
            className={`${styles.subtitle} ${
              isVisible ? styles.slideInRight : ""
            }`}
          >
            Have an innovative project in mind? I'm passionate about turning
            bold ideas into powerful digital solutions. Let's collaborate and
            build the future together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className={styles.contactGrid}>
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target={link.platform !== "Email" ? "_blank" : undefined}
              rel={
                link.platform !== "Email" ? "noopener noreferrer" : undefined
              }
              className={`${styles.contactCard} ${
                isVisible ? styles.cardSlideUp : ""
              }`}
              style={{
                "--animation-delay": `${index * 0.15}s`,
                "--accent-color": link.color,
              }}
              onMouseEnter={() => setHoveredCard(link.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>

              {/* Icon Section */}
              <div className={styles.iconSection}>
                <div className={styles.iconContainer}>
                  <img
                    src={getImageUrl(link.icon)}
                    alt={`${link.platform} icon`}
                    className={styles.platformIcon}
                  />
                </div>
                <div className={styles.iconRing}></div>
              </div>

              {/* Content Section */}
              <div className={styles.contentSection}>
                <h3 className={styles.platformName}>{link.platform}</h3>
                <p className={styles.handleText}>{link.handle}</p>
                <span className={styles.descriptionText}>
                  {link.description}
                </span>
              </div>

              {/* Action Arrow */}
              <div className={styles.actionArrow}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>

              {/* Hover Overlay */}
              {hoveredCard === link.id && (
                <div className={styles.hoverOverlay}></div>
              )}
            </a>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          className={`${styles.ctaSection} ${isVisible ? styles.bounceIn : ""}`}
        >
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Start?</h3>
              <p className={styles.ctaDescription}>
                Let's turn your vision into reality. I'm just one message away
                from making it happen.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a
                href="mailto:rakhaputrapebriyandra272@gmail.com"
                className={styles.primaryButton}
              >
                <span>Let's Talk</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 7L7 13" />
                  <path d="M7 7h6v6" />
                </svg>
              </a>

              <a
                href="https://wa.me/6285385032274"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <span>Quick Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
