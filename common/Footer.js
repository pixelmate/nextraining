import React from "react";
import styles from "../styles/Header.module.css";

const Footer = () => {
  return (
    <div className={styles.header + " container-fluid"}>
      <div className={" container m-auto p-2"}>
        <h3>Copyright © 2022 </h3>
      </div>
    </div>
  );
};

export default Footer;
