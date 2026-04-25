"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./WebsiteShowcase.module.css";

const websites = [
  {
    name: "Healthcare & Clinics",
    desc: "Doctor portals, booking systems, telehealth",
    url: "www.healthclinic.com.au",
    screenTitle: "City Health Clinic",
    screenSubtitle: "Book your appointment online in seconds",
    btnText: "Book Now",
    btnColor: "#10b981",
    bgGradient: "linear-gradient(135deg, #064e3b, #0f766e)",
    navItems: ["Home", "Services", "Doctors", "Book"],
  },
  {
    name: "E-Commerce & Retail",
    desc: "Online stores, product catalogs, POS",
    url: "www.modernshop.com",
    screenTitle: "Modern Shop",
    screenSubtitle: "Premium products delivered to your door",
    btnText: "Shop Now",
    btnColor: "#8b5cf6",
    bgGradient: "linear-gradient(135deg, #3b0764, #581c87)",
    navItems: ["Home", "Shop", "Cart", "Account"],
  },
  {
    name: "Restaurants & Hospitality",
    desc: "Menus, reservations, delivery integration",
    url: "www.finedine.com.au",
    screenTitle: "Fine Dine Restaurant",
    screenSubtitle: "Reserve a table for an unforgettable experience",
    btnText: "Reserve Table",
    btnColor: "#f59e0b",
    bgGradient: "linear-gradient(135deg, #78350f, #92400e)",
    navItems: ["Home", "Menu", "Reserve", "Order"],
  },
  {
    name: "Corporate & SaaS",
    desc: "Business sites, landing pages, dashboards",
    url: "www.techcorp.io",
    screenTitle: "TechCorp Solutions",
    screenSubtitle: "Streamline your business operations today",
    btnText: "Get Started",
    btnColor: "#3b82f6",
    bgGradient: "linear-gradient(135deg, #1e3a5f, #1e40af)",
    navItems: ["Home", "Features", "Pricing", "Contact"],
  },
];

export default function WebsiteShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % websites.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = websites[active];

  return (
    <section className={styles.section} id="websites" aria-label="Website development showcase">
      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Websites</span>
          <h2 className={styles.showcaseTitle}>
            Websites That{" "}
            <span className="gradient-text">Convert & Impress</span>
          </h2>
          <p className={styles.showcaseDesc}>
            We craft responsive, fast-loading websites tailored to your industry
            — from healthcare to hospitality.
          </p>

          <div className={styles.categories}>
            {websites.map((site, i) => (
              <div
                key={site.name}
                className={`${styles.category} ${
                  i === active ? styles.categoryActive : ""
                }`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i); } }}
                role="button"
                tabIndex={0}
                aria-pressed={i === active}
              >
                <div className={styles.categoryInfo}>
                  <div className={styles.categoryName}>{site.name}</div>
                  <div className={styles.categoryDesc}>{site.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.mockupSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.browserUrl}>
                  https://{current.url}
                </div>
              </div>

              <div className={styles.browserContent}>
                <motion.div
                  key={active}
                  className={styles.websiteScreen}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div
                    className={styles.screenHero}
                    style={{ background: current.bgGradient }}
                  >
                    <div className={styles.screenTitle}>
                      {current.screenTitle}
                    </div>
                    <div className={styles.screenSubtitle}>
                      {current.screenSubtitle}
                    </div>
                    <button
                      className={styles.screenBtn}
                      style={{ background: current.btnColor }}
                    >
                      {current.btnText}
                    </button>
                  </div>
                  <div className={styles.screenNav}>
                    {current.navItems.map((item) => (
                      <div key={item} className={styles.screenNavItem}>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className={styles.indicators}>
              {websites.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicator} ${
                    i === active ? styles.indicatorActive : ""
                  }`}
                  onClick={() => setActive(i)}
                  aria-label={`Show website ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
