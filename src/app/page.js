"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import styles from "./page.module.css";

export default function Home() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      // Already seen - hide overlay immediately
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }
      return;
    }

    // First visit - play animation
    sessionStorage.setItem("hasSeenIntro", "true");

    const tl = gsap.timeline();

    tl.to(nameRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    .to(nameRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "power2.in",
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.display = "none";
        }
      }
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="page-content hero" ref={containerRef}>
      <div className={styles.introOverlay} ref={overlayRef}>
        <div className={styles.introContent} ref={nameRef}>
          <h1 className={styles.introName}>Tyrhen Cameron</h1>
          <p className={styles.introSubtitle}>Software / Cloud Engineer</p>
        </div>
      </div>
      <h1 className={styles.aboutTitle}>
        About me<sup>(01)</sup>
      </h1>
      <div className={styles.aboutCard}>
        <p className={styles.bio}>
          Leveraging a background in Japanese linguistics to bring a unique perspective to crafting intuitive digital experiences. <br></br>
          Passionate about the intersection of beautiful design and robust infrastructure, I like to make pretty things that are gonna work for a long time.
          Currently exploring UI/UX, cloud solutions, chaos engineering, and network security. <br></br> <br></br>
          I am a Le Wagon alumni whose <a href="https://projects.lewagon.com/projects/kokai-soundworks" target="_blank" rel="noopener noreferrer" className={styles.subtleLink}>final project was voted one of the best apps from all Le Wagon campuses.</a> <br></br>

        </p>

        <div className={styles.skillsSection}>
          <div className={styles.skillCategory}>
            <span className={styles.categoryLabel}>Frontend</span>
            <div className={styles.tags}>
              <span className={styles.tag}>HTML</span>
              <span className={styles.tag}>CSS</span>
              <span className={styles.tag}>SCSS</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>GSAP</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <span className={styles.categoryLabel}>Backend</span>
            <div className={styles.tags}>
              <span className={styles.tag}>Ruby on Rails</span>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>SQL</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>Prisma</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <span className={styles.categoryLabel}>Infrastructure</span>
            <div className={styles.tags}>
              <span className={styles.tag}>AWS</span>
              <span className={styles.tag}>Terraform</span>
              <span className={styles.tag}>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
