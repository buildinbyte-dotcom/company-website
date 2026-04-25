"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";



export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero — Build In Byte digital solutions">
      {/* Background Orbs */}
      <div className={styles.orbContainer}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badgeDot} />
          Digital Solutions That Scale
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          We Build{" "}
          <span className={styles.titleGradient}>Digital Experiences</span>{" "}
          That Drive Growth
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From stunning websites to powerful apps and intelligent chatbots —
          Build In Byte delivers end-to-end digital solutions tailored to your
          business.
        </motion.p>

        <motion.div
          className={styles.heroCta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#services" className={styles.primaryBtn}>
            Explore Our Work →
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Start a Project
          </a>
        </motion.div>

        <motion.div
          className={styles.heroTeamText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Our team consists of expert engineers and data scientists, each with 15+ years of experience.
        </motion.div>
      </div>
    </section>
  );
}
