import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a className={styles.logo} href="/">
          <div className={styles.logoIcon}>
            <span>R</span>
          </div>
          <span className={styles.logoText}>Rakha Yandra</span>
        </a>

        <div className={styles.menu}>
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            className={`${styles.menuItems} ${
              menuOpen ? styles.menuItemsOpen : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about" className={styles.menuItem}>
                <span className={styles.menuNumber}>01</span>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.menuItem}>
                <span className={styles.menuNumber}>02</span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#experience" className={styles.menuItem}>
                <span className={styles.menuNumber}>03</span>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.menuItem}>
                <span className={styles.menuNumber}>04</span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.menuItem}>
                <span className={styles.menuNumber}>05</span>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <a
          href="mailto:rakhaputrapebriyandra272@gmail.com"
          className={styles.ctaButton}
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
};
