"use client";

import { motion } from "framer-motion";
import styles from "./ServiceCards.module.css";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Pixel-perfect, responsive websites that convert visitors into customers. From landing pages to full-scale web platforms.",
    tags: ["Healthcare", "E-Commerce", "Restaurants", "Corporate", "SaaS"],
    color: "Blue" as const,
  },
  {
    icon: "📱",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications built for performance, scalability, and exceptional user experience.",
    tags: ["iOS", "Android", "React Native", "Flutter", "Cross-Platform"],
    color: "Violet" as const,
  },
  {
    icon: "🤖",
    title: "AI Chatbots",
    description:
      "Intelligent conversational agents powered by cutting-edge AI. Automate support, generate leads, and delight customers 24/7.",
    tags: ["Customer Support", "Lead Gen", "E-Commerce", "AI Agents", "LLM"],
    color: "Cyan" as const,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ServiceCards() {
  return (
    <section className={styles.section} id="services">
      <div className={`container ${styles.header}`}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Our <span className="gradient-text">Core Services</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          style={{ margin: "0 auto" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We specialize in three pillars of digital excellence, delivering
          solutions that transform how businesses operate and engage.
        </motion.p>
      </div>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className={styles.card}
            variants={cardVariants}
          >
            <div
              className={`${styles.cardGlow} ${
                styles[`glow${service.color}`]
              }`}
            />
            <div
              className={`${styles.iconWrap} ${
                styles[`icon${service.color}`]
              }`}
            >
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
