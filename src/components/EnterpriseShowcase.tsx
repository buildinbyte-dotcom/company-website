"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./EnterpriseShowcase.module.css";

const solutions = [
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
  {
    name: "Custom Software",
    desc: "Bespoke systems built for your operations",
    screenTitle: "Enterprise Suite",
    screenSubtitle: "Tailored solutions for complex workflows",
    modules: [
      { name: "ERP Integration", status: "Active", progress: 88 },
      { name: "CRM Platform", status: "Active", progress: 95 },
      { name: "Analytics Engine", status: "Active", progress: 72 },
    ],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Users Served", value: "10K+" },
    ],
    accentColor: "#0ea5e9",
  },
  {
    name: "Legacy Migration",
    desc: "Seamless transition from legacy to modern stacks",
    screenTitle: "Migration Console",
    screenSubtitle: "Zero-downtime system modernization",
    modules: [
      { name: "Data Migration", status: "Active", progress: 96 },
      { name: "API Gateway", status: "Active", progress: 82 },
      { name: "System Testing", status: "Active", progress: 90 },
    ],
    metrics: [
      { label: "Data Integrity", value: "100%" },
      { label: "Downtime", value: "0 hrs" },
    ],
    accentColor: "#14b8a6",
  },
];

const capabilities = [
  { label: "Cloud Architecture" },
  { label: "System Integration" },
  { label: "DevOps & CI/CD" },
  { label: "Database Design" },
  { label: "Security & Compliance" },
  { label: "Performance Optimization" },
  { label: "API Development" },
  { label: "Monitoring & Observability" },
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
    <section className={styles.section} id="enterprise">
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
            Enterprise Solutions That{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className={styles.showcaseDesc}>
            We architect and build robust, scalable enterprise systems — from
            digital transformation and custom platforms to legacy migration and
            cloud infrastructure.
          </p>

          <div className={styles.solutionTabs}>
            {solutions.map((sol, i) => (
              <div
                key={sol.name}
                className={`${styles.solutionTab} ${
                  i === active ? styles.solutionTabActive : ""
                }`}
                onClick={() => setActive(i)}
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
