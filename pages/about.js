import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className="bg-info">
      <h2 className={styles.about_text}>This is about</h2>
    </div>
  );
};

export default About;
