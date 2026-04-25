import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <span className={styles.logoIcon}>B</span>
          Build In Byte
        </div>

        <div className={styles.footerCopy}>
          © {new Date().getFullYear()} Build In Byte. All rights reserved.
        </div>

        <div className={styles.footerLinks}>
          <a href="#services" className={styles.footerLink}>
            Services
          </a>
          <a href="#contact" className={styles.footerLink}>
            Contact
          </a>
          <a href="mailto:hello@buildinbyte.com" className={styles.footerLink}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
