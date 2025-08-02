import { useState, useEffect, useRef } from "react";
import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";
import certificates from "../../data/certificates.json";

export const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);

  // Sort certificates by date (newest first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    const getDateValue = (dateStr) => {
      const [month, year] = dateStr.split(" ");
      const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
      return new Date(parseInt(year), monthIndex);
    };

    const dateA = getDateValue(a.date);
    const dateB = getDateValue(b.date);
    return dateB - dateA; // Descending order (newest first)
  });

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

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className={styles.container} id="certificates" ref={sectionRef}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShapes}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={styles.shape}
              style={{
                "--delay": `${i * 0.7}s`,
                "--duration": `${10 + i * 1.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={`${styles.title} ${isVisible ? styles.slideUp : ""}`}>
          Professional Certifications
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.slideUp : ""}`}>
          Validated expertise through industry-recognized credentials
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.certificatesGrid}>
          {sortedCertificates.map((certificate, id) => (
            <div
              key={id}
              className={`${styles.certificateCard} ${
                isVisible ? styles.slideUp : ""
              }`}
              style={{ "--delay": `${id * 0.15}s` }}
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className={styles.cardHeader}>
                <div className={styles.certificateIcon}>
                  <img
                    src={getImageUrl(certificate.imageSrc)}
                    alt={`${certificate.issuingOrganization} logo`}
                    className={styles.organizationLogo}
                  />
                </div>
                <div className={styles.badgeContainer}>
                  <div className={styles.verifiedBadge}>
                    <span className={styles.badgeIcon}>✓</span>
                    <span>Verified</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.certificateTitle}>{certificate.title}</h3>
                <p className={styles.issuingOrg}>
                  {certificate.issuingOrganization}
                </p>
                <p className={styles.issueDate}>{certificate.date}</p>

                <div className={styles.skillsContainer}>
                  {certificate.skills.slice(0, 3).map((skill, skillId) => (
                    <span key={skillId} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className={styles.skillTag}>
                      +{certificate.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className={styles.cardActions}>
                  <button className={styles.viewButton}>View Details</button>
                  {certificate.verificationUrl && (
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className={styles.modalOverlay} onClick={closeCertificateModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeCertificateModal}
            >
              ×
            </button>

            <div className={styles.modalHeader}>
              <img
                src={getImageUrl(selectedCertificate.imageSrc)}
                alt={`${selectedCertificate.issuingOrganization} logo`}
                className={styles.modalLogo}
              />
              <div>
                <h3 className={styles.modalTitle}>
                  {selectedCertificate.title}
                </h3>
                <p className={styles.modalOrg}>
                  {selectedCertificate.issuingOrganization}
                </p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Issue Date:</span>
                  <span className={styles.infoValue}>
                    {selectedCertificate.date}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Credential ID:</span>
                  <span className={styles.infoValue}>
                    {selectedCertificate.credentialId}
                  </span>
                </div>
              </div>

              <div className={styles.modalDescription}>
                <h4>Description</h4>
                <p>{selectedCertificate.description}</p>
              </div>

              <div className={styles.modalSkills}>
                <h4>Skills Covered</h4>
                <div className={styles.skillsList}>
                  {selectedCertificate.skills.map((skill, id) => (
                    <span key={id} className={styles.modalSkillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCertificate.verificationUrl && (
                <div className={styles.modalActions}>
                  <a
                    href={selectedCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalVerifyButton}
                  >
                    Verify Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
