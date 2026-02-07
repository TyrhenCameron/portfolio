"use client";

import React from "react";
import { useTranslations } from 'next-intl';
import styles from "./translations.module.css";

const translationProjects = [
  {
    key: "nptStatement",
    url: "https://www.city.nagasaki.lg.jp/page/5820.html",
    client: "Nagasaki City",
    type: "officialStatement",
  },
  {
    key: "subcriticalProtest",
    url: "https://www.city.nagasaki.lg.jp/page/5284.html",
    client: "Nagasaki City",
    type: "officialStatement",
  },
  {
    key: "russiaProtest",
    url: "https://www.city.nagasaki.lg.jp/page/5209.html",
    client: "Nagasaki City",
    type: "officialStatement",
  },
  {
    key: "planetaryHealth",
    url: "https://www.plh.nagasaki-u.ac.jp/english/concept/",
    client: "Nagasaki University",
    type: "academic",
  },
];

export default function Page() {
  const t = useTranslations('translations');

  const renderTranslationCard = (project, index) => (
    <div key={index} className={styles.translationCard}>
      <div className={styles.cardHeader}>
        <span className={styles.clientTag}>{project.client}</span>
        <span className={styles.typeTag}>{t(`types.${project.type}`)}</span>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.projectTitle}>{t(`items.${project.key}.title`)}</h2>
        <p className={styles.projectDescription}>{t(`items.${project.key}.description`)}</p>
        <div className={styles.projectMeta}>
          <span className={styles.languagePair}>JP → EN</span>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewLink}
        >
          {t('viewTranslation')} &#8599;
        </a>
      </div>
    </div>
  );

  return (
    <div className="page-content translations">
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>
          {t('title')}<sup>({t('sectionNumber')})</sup>
        </h1>
        <p className={styles.pageIntro}>{t('intro')}</p>

        <div className={styles.translationsGrid}>
          {translationProjects.map(renderTranslationCard)}
        </div>
      </div>
    </div>
  );
}
