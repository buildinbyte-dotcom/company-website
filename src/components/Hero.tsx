"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "30+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
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
          className={styles.statsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
