import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

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
        <div class="col-3  m-auto">
          <div class="input-group">
            <input type="text" class="form-control" />
            <button class="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
