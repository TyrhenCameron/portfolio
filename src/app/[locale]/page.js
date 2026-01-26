"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { useTranslations } from 'next-intl';
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('home');
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
      }
      return;
    }

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
          <h1 className={styles.introName}>{t('introName')}</h1>
          <p className={styles.introSubtitle}>{t('introSubtitle')}</p>
        </div>
      </div>
      <h1 className={styles.aboutTitle}>
        {t('aboutTitle')}<sup>({t('sectionNumber')})</sup>
      </h1>
      <div className={styles.aboutCard}>
        <p className={styles.bio}>
          {t('bio')} <br></br>
          {t('bio2')} <br></br> <br></br>
          {t('bio3')} <a href="https://projects.lewagon.com/projects/kokai-soundworks" target="_blank" rel="noopener noreferrer" className={styles.subtleLink}>{t('leWagonLink')}</a> <br></br>
        </p>

        <div className={styles.skillsSection}>
          <div className={styles.skillCategory}>
            <span className={styles.categoryLabel}>{t('frontend')}</span>
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
            <span className={styles.categoryLabel}>{t('backend')}</span>
            <div className={styles.tags}>
              <span className={styles.tag}>Ruby on Rails</span>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>SQL</span>
              <span className={styles.tag}>PostgreSQL</span>
              <span className={styles.tag}>Prisma</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <span className={styles.categoryLabel}>{t('infrastructure')}</span>
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
