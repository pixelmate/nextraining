import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Navbar = () => {
  return (
    <div className="m-auto">
      <h2 className="text-center">
        <Link className={styles.navLinks} href="/">
          Home
        </Link>
        <Link className={styles.navLinks} href="/about">
          About
        </Link>
        <Link className={styles.navLinks} href="/products">
          Products
        </Link>
        <Link className={styles.navLinks} href="/test">
          Test
        </Link>
        <Link className={styles.navLinks} href="/batches">
          Batches
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
