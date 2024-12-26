import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import figma from "../../assets/img/figma.png";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              {/* Render gambar dengan fallback */}
              <img
                src={historyItem.imageSrc}
                alt={`${historyItem.organisation} Logo`}
                onError={(e) => {
                  e.target.onerror = null; // Hindari loop
                  e.target.src = "/images/default-logo.png"; // Fallback image
                }}
              />
              <div className={styles.historyItemDetails}>
                {/* Informasi Role dan Organisasi */}
                <h5>{`${historyItem.role}, ${historyItem.organisation}`}</h5>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                {/* List pengalaman */}
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
