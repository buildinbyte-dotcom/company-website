"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaGlow} />

          <motion.h2
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ready to <span className="gradient-text">Build Something Great</span>?
          </motion.h2>

          <motion.p
            className={styles.ctaSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let&apos;s discuss your project. Whether you need a website, app, or chatbot
            — we&apos;re here to turn your vision into reality.
          </motion.p>

          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:hello@buildinbyte.com"
              className={styles.primaryBtn}
            >
              ✉️ Send Us an Email
            </a>
            <a href="#services" className={styles.secondaryBtn}>
              View Our Services
            </a>
          </motion.div>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              hello@buildinbyte.com
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              Australia
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🌐</span>
              buildinbyte.com
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
