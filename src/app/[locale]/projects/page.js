"use client";

import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import styles from "./projects.module.css";

const softwareProjects = [
  {
    key: "dreamhero",
    image: "/dream-hero-screenshot.png",
    tech: ["Ruby on Rails", "Gemini", "OpenAI API"],
    github: "https://github.com/kylehansen17/dream_hero",
    live: "https://ai-assistant-kylehansen17-9c0886704a5e.herokuapp.com/",
  },
  {
    key: "kokai",
    image: "/kokai-soundwork-screenshot.png",
    tech: ["Ruby on Rails", "Stripe API", "JavaScript"],
    github: "https://github.com/elemelon202/kokai-soundworks",
    live: "https://www.kokai-soundworks.com/",
  },
  {
    key: "kakehashi",
    image: "/kakehashi-screenshot.png",
    tech: ["Rails API", "React", "TypeScript"],
    github: "https://github.com/elemelon202/kakehashi",
    live: "https://www.kakehashi-visa.com/",
  },
];

const sreProjects = [
  {
    key: "eris",
    image: "/eris_logo.png",
    tech: ["Python", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/TyrhenCameron/eris-chaos-lab",
  },
  {
    key: "nyx",
    image: "/nyx_icon.png",
    tech: ["Terraform", "AWS Lambda", "S3", "DynamoDB", "Python"],
    github: "https://github.com/TyrhenCameron/nyx-aws",
  },
  {
    key: "hecate",
    image: "/hecate_icon.png",
    tech: ["Terraform", "AWS FIS", "EC2", "ALB", "CloudWatch"],
    github: "https://github.com/TyrhenCameron/hecate-aws",
  },
];

export default function Page() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState('software');

  const renderProjectCard = (project, index) => (
    <div key={index} className={styles.projectCard}>
      {project.image ? (
        <img
          src={project.image}
          alt={t(`items.${project.key}.name`)}
          className={styles.projectImage}
        />
      ) : (
        <div className={styles.projectImagePlaceholder}>
          <span className={styles.projectInitial}>
            {t(`items.${project.key}.name`).charAt(0)}
          </span>
        </div>
      )}
      <div className={styles.projectContent}>
        <h2 className={styles.projectName}>{t(`items.${project.key}.name`)}</h2>
        <p className={styles.projectDescription}>{t(`items.${project.key}.description`)}</p>
        <div className={styles.techTags}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              {t('viewOnGithub')} &#8599;
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
              Live &#8599;
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-content projects">
      <div className={styles.workContainer}>
        <h1 className={styles.workTitle}>
          {t('title')}<sup>({t('sectionNumber')})</sup>
        </h1>

        <div className={styles.filterSwitcher}>
          <button
            className={`${styles.filterBtn} ${activeFilter === 'software' ? styles.active : ''}`}
            onClick={() => setActiveFilter('software')}
          >
            {t('softwareSection')}
          </button>
          <button
            className={`${styles.filterBtn} ${activeFilter === 'sre' ? styles.active : ''}`}
            onClick={() => setActiveFilter('sre')}
          >
            {t('sreSection')}
          </button>
        </div>

        {activeFilter === 'software' && (
          <section className={styles.projectSection}>
            <div className={styles.projectsGrid}>
              {softwareProjects.map(renderProjectCard)}
            </div>
          </section>
        )}

        {activeFilter === 'sre' && (
          <section className={styles.projectSection}>
            <div className={styles.projectsGrid}>
              {sreProjects.map(renderProjectCard)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
