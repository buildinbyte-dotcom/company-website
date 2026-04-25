"use client";

import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

const stats = [
  { icon: "🚀", number: "50+", label: "Projects Launched" },
  { icon: "⭐", number: "99%", label: "Client Satisfaction" },
  { icon: "⚡", number: "2x", label: "Faster Delivery" },
  { icon: "🔒", number: "100%", label: "Secure & Reliable" },
];

const techStack = [
  { icon: "⚛️", name: "React / Next.js" },
  { icon: "📱", name: "React Native" },
  { icon: "🟢", name: "Node.js" },
  { icon: "🐍", name: "Python" },
  { icon: "🤖", name: "OpenAI / LLMs" },
  { icon: "☁️", name: "AWS / GCP" },
  { icon: "🗄️", name: "PostgreSQL" },
  { icon: "🔥", name: "Firebase" },
  { icon: "🎨", name: "Figma" },
  { icon: "📊", name: "Analytics" },
];

const expertise = [
  {
    icon: "🏗️",
    name: "End-to-End Development",
    desc: "From concept and design to deployment and maintenance — we handle the entire development lifecycle.",
  },
  {
    icon: "🎯",
    name: "Industry-Specific Solutions",
    desc: "Tailored solutions for healthcare, retail, hospitality, and more with domain expertise built in.",
  },
  {
    icon: "📈",
    name: "Growth-Focused Approach",
    desc: "Every solution is built with scalability and business growth in mind. Your success is our success.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={`container ${styles.header}`}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Build In Byte
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Built for <span className="gradient-text">Excellence</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: "0 auto" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We combine technical expertise, creative design, and strategic
          thinking to deliver digital solutions that make a real impact.
        </motion.p>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            variants={itemVariants}
          >
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.techSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.techTitle}>Our Tech Stack</div>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <div key={tech.name} className={styles.techBadge}>
              <span className={styles.techBadgeIcon}>{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.expertiseRow}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {expertise.map((item) => (
          <motion.div
            key={item.name}
            className={styles.expertiseCard}
            variants={itemVariants}
          >
            <div className={styles.expertiseIcon}>{item.icon}</div>
            <div className={styles.expertiseName}>{item.name}</div>
            <div className={styles.expertiseDesc}>{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
