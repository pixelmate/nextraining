import React, { Children } from "react";
import Header from "../common/Header";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout = (props) => {
  const { children, footerstatus } = props;
  // console.log("footerstatus", footerstatus);
  return (
    <>
      {true ? (
        <div className="container-fluid p-0">
          <Header />
          <div className="container ">{children}</div>
          {!footerstatus && <Footer />}
        </div>
      ) : (
        <div className="container">
          <Header />
          <Navbar />
          {children}
          {!footerstatus && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
