"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Websites", href: "#websites" },
  { label: "Apps", href: "#apps" },
  { label: "Chatbots", href: "#chatbots" },
  { label: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navContent}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>B</span>
            Build In Byte
          </a>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className={styles.ctaButton}>
              Get In Touch
            </a>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
      >
        <button
          className={styles.closeMenu}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.navLink}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.ctaButton}
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </a>
      </div>
    </>
  );
}
