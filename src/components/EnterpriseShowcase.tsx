"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./EnterpriseShowcase.module.css";

const solutions = [
  {
    name: "Legacy Migration",
    desc: "Seamless transition from legacy to modern stacks",
    screenTitle: "Migration Console",
    screenSubtitle: "Zero-downtime system modernization",
    modules: [
      { name: "Data Migration", status: "Complete", progress: 100 },
      { name: "API Gateway", status: "Active", progress: 82 },
      { name: "System Testing", status: "Active", progress: 90 },
    ],
    metrics: [
      { label: "Data Integrity", value: "100%" },
      { label: "Downtime", value: "0 hrs" },
    ],
    accentColor: "#14b8a6",
  },
  {
    name: "Gen AI Adoption",
    desc: "Accelerate your business with generative AI integration",
    screenTitle: "Gen AI Operations",
    screenSubtitle: "Enterprise Gen AI performance at a glance",
    modules: [
      { name: "LLM Integration", status: "Deployed", progress: 95 },
      { name: "RAG Pipeline", status: "Optimal", progress: 92 },
      { name: "Agent Workflows", status: "Active", progress: 87 },
    ],
    metrics: [
      { label: "Tasks Automated", value: "12K+" },
      { label: "Model Accuracy", value: "97.3%" },
    ],
    accentColor: "#0ea5e9",
  },
  {
    name: "Digital Transformation",
    desc: "End-to-end modernization of business processes",
    screenTitle: "Transform Hub",
    screenSubtitle: "Modernize your entire business stack",
    modules: [
      { name: "Process Automation", status: "Active", progress: 92 },
      { name: "Cloud Migration", status: "Active", progress: 78 },
      { name: "Data Integration", status: "Active", progress: 85 },
    ],
    metrics: [
      { label: "Efficiency Gain", value: "3.2x" },
      { label: "Cost Reduction", value: "45%" },
    ],
    accentColor: "#2563eb",
  },
];

const capabilities = [
  { label: "Gen AI Strategy" },
  { label: "LLM Fine-Tuning" },
  { label: "RAG Pipelines" },
  { label: "AI Agents" },
  { label: "Cloud Architecture" },
  { label: "System Integration" },
  { label: "DevOps & CI/CD" },
  { label: "Security & Compliance" },
];

export default function EnterpriseShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = solutions[active];

  return (
    <section className={styles.section} id="enterprise" aria-label="Enterprise and Gen AI solutions">
      <div className={styles.content}>
        <motion.div
          className={styles.mockupSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className={styles.dashboardFrame}>
              <div className={styles.dashboardBar}>
                <div className={styles.dashboardDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.dashboardTitle}>
                  {current.screenTitle}
                </div>
              </div>

              <div className={styles.dashboardContent}>
                <motion.div
                  key={active}
                  className={styles.dashboardScreen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.screenHeader}>
                    <div className={styles.screenHeading}>
                      {current.screenSubtitle}
                    </div>
                    <div
                      className={styles.statusBadge}
                      style={{ background: current.accentColor }}
                    >
                      Live
                    </div>
                  </div>

                  <div className={styles.modulesList}>
                    {current.modules.map((mod, i) => (
                      <motion.div
                        key={mod.name}
                        className={styles.moduleItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 + 0.2 }}
                      >
                        <div className={styles.moduleHeader}>
                          <span className={styles.moduleName}>{mod.name}</span>
                          <span className={styles.moduleStatus}>
                            {mod.status}
                          </span>
                        </div>
                        <div className={styles.moduleBar}>
                          <motion.div
                            className={styles.moduleBarFill}
                            initial={{ width: 0 }}
                            animate={{ width: `${mod.progress}%` }}
                            transition={{
                              delay: i * 0.15 + 0.4,
                              duration: 0.8,
                            }}
                            style={{ background: current.accentColor }}
                          />
                        </div>
                        <span className={styles.modulePercent}>
                          {mod.progress}%
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className={styles.metricsRow}>
                    {current.metrics.map((m) => (
                      <div key={m.label} className={styles.metricCard}>
                        <div
                          className={styles.metricValue}
                          style={{ color: current.accentColor }}
                        >
                          {m.value}
                        </div>
                        <div className={styles.metricLabel}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className={styles.indicators}>
              {solutions.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicator} ${
                    i === active ? styles.indicatorActive : ""
                  }`}
                  onClick={() => setActive(i)}
                  aria-label={`Show solution ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label">Enterprise</span>
          <h2 className={styles.showcaseTitle}>
            Enterprise &{" "}
            <span className="gradient-text">Gen AI Solutions</span>
          </h2>
          <p className={styles.showcaseDesc}>
            We help businesses adopt generative AI and modernize their
            infrastructure — from LLM integration and AI agent workflows to
            legacy migration and digital transformation.
          </p>

          <div className={styles.solutionTabs}>
            {solutions.map((sol, i) => (
              <div
                key={sol.name}
                className={`${styles.solutionTab} ${
                  i === active ? styles.solutionTabActive : ""
                }`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                role="button"
                tabIndex={0}
                aria-pressed={i === active}
              >
                <div className={styles.solutionTabName}>{sol.name}</div>
                <div className={styles.solutionTabDesc}>{sol.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.capabilities}>
            {capabilities.map((cap) => (
              <div key={cap.label} className={styles.capability}>
                {cap.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
