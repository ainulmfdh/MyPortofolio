import React from "react";
import styles from "./About.module.css";
import boy from "../../assets/img/boy.png";
import android from "../../assets/img/android.png";
import web from "../../assets/img/web.png";
import figma from "../../assets/img/figma.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
          src={boy}
          className="img-fluid"
          alt="Me sitting with a laptop"
          style={{ width: '300px', height: 'auto' }} 
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img
              src={android}
              className="img-fluid"
              alt="Me sitting with a laptop"
              style={{ width: '100px', height: 'auto', marginRight: '30px' }} 
            />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                I'm a Android Developer with experience in building application using Kotlin and Flutter
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img
              src={web}
              className="img-fluid"
              alt="Me sitting with a laptop"
              style={{ width: '100px', height: 'auto', marginRight: '30px' }} 
            />
            <div className={styles.aboutItemText}>
              <h3>Website Developer</h3>
              <p>
                I have experience developing user interface and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img
              src={figma}
              className="img-fluid"
              alt="Me sitting with a laptop"
              style={{ width: '100px', height: 'auto', marginRight: '30px' }} 
            />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have designed application pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
