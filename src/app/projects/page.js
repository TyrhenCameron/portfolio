import React from "react";
import styles from "./projects.module.css";

const projects = [
  {
    name: "Kokai Soundworks",
    description: "One-stop-platform for musicians to find bands, fund gigs, and fill venues. Voted one of the best projects out of all Le Wagon campuses",
    image: "/kokai-soundwork-screenshot.png",
    tech: ["Ruby on Rails", "Stripe API", "Javacsript"],
    github: "https://github.com/TyrhenCameron/kokai-soundworks",
  },
  {
    name: "Kakehashi Visa",
    description: "A platform to make it easy for Japanese immigration lawyers to work together with foreign nationals in securing their visas.",
    image: "/kakehashi-screenshot.png",
    tech: ["Rails API", "React", "Typescript"],
    github: "https://github.com/TyrhenCameron/kokai-soundworks",
  },
  {
    name: "Dream Hero",
    description: "AI bedtime story app that allows you to choose your own adventure and insert your own characters that the story adapts around.",
    image: "/dream-hero-screenshot.png",
    tech: ["Ruby on Rails", "Gemini", "OpenAI API"],
    github: "https://github.com/TyrhenCameron/dream-hero",
  },
  {
    name: "ERIS - Chaos Lab",
    description: "Chaos engineering platform",
    image: "/eris_logo.png",
    tech: ["Python", "Prometheus", "Grafana", "Docker"],
    github: "https://github.com/TyrhenCameron/eris-chaos-lab",
  },
  // Add more projects here
];

const Page = () => {
  return (
    <div className="page-content projects">
      <div className={styles.workContainer}>
        <h1 className={styles.workTitle}>
          Projects<sup>(02)</sup>
        </h1>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h2 className={styles.projectName}>{project.name}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techTags}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    GitHub &#8599;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
