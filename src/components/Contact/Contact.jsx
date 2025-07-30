import { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
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

  const contactData = [
    {
      type: "Email",
      value: "rakhaputrapebriyandra272@gmail.com",
      label: "Let's discuss your next project",
      icon: "contact/emailIcon.png",
      href: "mailto:rakhaputrapebriyandra272@gmail.com",
    },
    {
      type: "WhatsApp",
      value: "+62 853-5803-2274",
      label: "Chat with me instantly",
      icon: "contact/whatsappIcon.png",
      href: "https://wa.me/6285385032274",
    },
    {
      type: "Instagram",
      value: "@rakhayandra_",
      label: "Follow my journey and updates",
      icon: "contact/instagramIcon.png",
      href: "https://www.instagram.com/rakhayandra_",
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/rakhaputrapebriyandra",
      label: "Connect with me professionally",
      icon: "contact/linkedinIcon.png",
      href: "https://www.linkedin.com/in/rakhaputrapebriyandra",
    },
    {
      type: "GitHub",
      value: "github.com/RakhaYandra",
      label: "Check out my latest projects",
      icon: "contact/githubIcon.png",
      href: "https://www.github.com/RakhaYandra",
    },
  ];

  return (
    <footer id="contact" className={styles.container} ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrbs}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <div className={`${styles.badge} ${isVisible ? styles.slideUp : ""}`}>
            <span className={styles.statusDot}></span>
            Available for new opportunities
          </div>
          <h2 className={`${styles.title} ${isVisible ? styles.slideUp : ""}`}>
            Let&apos;s Connect
          </h2>
          <p
            className={`${styles.subtitle} ${isVisible ? styles.slideUp : ""}`}
          >
            Ready to bring your ideas to life? Let&apos;s start a conversation
            and create something amazing together.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactData.map((contact, index) => (
            <a
              key={contact.type}
              href={contact.href}
              target={contact.type !== "Email" ? "_blank" : undefined}
              rel={contact.type !== "Email" ? "noopener noreferrer" : undefined}
              className={`${styles.contactCard} ${
                isVisible ? styles.slideUp : ""
              }`}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className={styles.iconContainer}>
                <img
                  src={getImageUrl(contact.icon)}
                  alt={`${contact.type} icon`}
                  className={styles.contactIcon}
                />
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactType}>{contact.type}</div>
                <div className={styles.contactValue}>{contact.value}</div>
                <div className={styles.contactLabel}>{contact.label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
