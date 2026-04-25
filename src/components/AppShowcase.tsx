"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./AppShowcase.module.css";

const appScreens = [
  {
    name: "Dashboard",
    logo: "BizTrack",
    cards: [
      {
        title: "Revenue This Month",
        desc: "$24,580.00",
        barWidth: "78%",
        barColor: "#10b981",
      },
      {
        title: "Active Orders",
        desc: "142 orders in progress",
        barWidth: "62%",
        barColor: "#3b82f6",
      },
      {
        title: "Customer Satisfaction",
        desc: "4.9 / 5.0 rating",
        barWidth: "96%",
        barColor: "#f59e0b",
      },
    ],
    tabs: ["Home", "Stats", "Alerts", "Profile"],
    activeTab: 1,
  },
  {
    name: "Food Ordering",
    logo: "QuickBite",
    cards: [
      {
        title: "Margherita Pizza",
        desc: "$16.99 · 25 min delivery",
        barWidth: "90%",
        barColor: "#f43f5e",
      },
      {
        title: "Caesar Salad",
        desc: "$12.50 · 15 min delivery",
        barWidth: "70%",
        barColor: "#10b981",
      },
      {
        title: "Iced Latte",
        desc: "$5.99 · 10 min pickup",
        barWidth: "45%",
        barColor: "#8b5cf6",
      },
    ],
    tabs: ["Home", "Search", "Cart", "Profile"],
    activeTab: 0,
  },
  {
    name: "Fitness",
    logo: "FitPulse",
    cards: [
      {
        title: "Steps Today",
        desc: "8,432 / 10,000 steps",
        barWidth: "84%",
        barColor: "#06b6d4",
      },
      {
        title: "Calories Burned",
        desc: "520 / 650 kcal",
        barWidth: "80%",
        barColor: "#f59e0b",
      },
      {
        title: "Weekly Streak",
        desc: "5 days active",
        barWidth: "71%",
        barColor: "#f43f5e",
      },
    ],
    tabs: ["Home", "Run", "Stats", "Profile"],
    activeTab: 0,
  },
];

const features = [
  {
    name: "Cross-Platform",
    desc: "iOS & Android from a single codebase",
  },
  {
    name: "Stunning UI/UX",
    desc: "Beautiful, intuitive interfaces users love",
  },
  {
    name: "Secure & Scalable",
    desc: "Enterprise-grade security built in",
  },
  {
    name: "Real-Time Data",
    desc: "Live updates, push notifications, analytics",
  },
];

export default function AppShowcase() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % appScreens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const screen = appScreens[activeScreen];

  return (
    <section className={styles.section} id="apps" aria-label="Mobile app development showcase">
      <div className={styles.content}>
        <motion.div
          className={styles.mockupSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <motion.div
                  key={activeScreen}
                  className={styles.appScreen}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.appHeader}>
                    <div className={styles.appLogo}>{screen.logo}</div>
                    <div className={styles.appAvatar}>V</div>
                  </div>

                  <div className={styles.appContent}>
                    {screen.cards.map((card, i) => (
                      <motion.div
                        key={card.title}
                        className={styles.appCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 + 0.2 }}
                      >
                        <div className={styles.appCardTitle}>{card.title}</div>
                        <div className={styles.appCardDesc}>{card.desc}</div>
                        <div className={styles.appCardBar}>
                          <motion.div
                            className={styles.appCardBarFill}
                            initial={{ width: 0 }}
                            animate={{ width: card.barWidth }}
                            transition={{ delay: i * 0.15 + 0.5, duration: 1 }}
                            style={{ background: card.barColor }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className={styles.appTabBar}>
                    {screen.tabs.map((tab, i) => (
                      <div
                        key={i}
                        className={`${styles.appTab} ${
                          i === screen.activeTab ? styles.appTabActive : ""
                        }`}
                      >
                        {tab}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className={styles.screenDots}>
              {appScreens.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.screenDot} ${
                    i === activeScreen ? styles.screenDotActive : ""
                  }`}
                  onClick={() => setActiveScreen(i)}
                  aria-label={`Show app screen ${i + 1}`}
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
          <span className="section-label">Apps</span>
          <h2 className={styles.showcaseTitle}>
            Apps That Users{" "}
            <span className="gradient-text">Love to Use</span>
          </h2>
          <p className={styles.showcaseDesc}>
            We build high-performance mobile applications with stunning
            interfaces, real-time capabilities, and seamless cross-platform
            experience.
          </p>

          <div className={styles.features}>
            {features.map((feat) => (
              <div key={feat.name} className={styles.feature}>
                <div className={styles.featureInfo}>
                  <div className={styles.featureName}>{feat.name}</div>
                  <div className={styles.featureDesc}>{feat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
