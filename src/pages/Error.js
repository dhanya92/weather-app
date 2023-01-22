import React from "react";
import Button from "../components/Button";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className={styles["section-error"]}>
      <p>Unable to fetch the content. Please try again later.</p>
      <Button btnText='Go to home' onBtnClick={() => navigate("/home")} />
    </section>
  );
};

export default Error;
