import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header + " p-2 ps-3 pe-3 "}>
      <div class="row container m-auto">
        <div class="col-3">
          {" "}
          <Image
            src="/HeaderLogo.png"
            width={100}
            height={70}
            alt="headerlogo"
          />
        </div>
        <div class="col-6 m-auto">
          <Navbar />
        </div>
        <div class="col-3  m-auto justify-content-end d-flex">
          <button class="btn btn-outline-secondary col-6" type="button">
            <Link href="/login" >Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
