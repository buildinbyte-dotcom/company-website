import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <span className={styles.logoIcon}>B</span>
          Build In Byte
        </div>

        <div className={styles.footerCopy}>
          © {new Date().getFullYear()} Build In Byte. All rights reserved.
        </div>

        <nav className={styles.footerLinks} aria-label="Footer navigation">
          <a href="#services" className={styles.footerLink}>
            Services
          </a>
          <a href="#enterprise" className={styles.footerLink}>
            Enterprise
          </a>
          <a href="#contact" className={styles.footerLink}>
            Contact
          </a>
          <a href="mailto:hello@buildinbyte.com" className={styles.footerLink}>
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
