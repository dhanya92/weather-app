import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
