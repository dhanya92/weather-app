import styles from "./Parameter.module.css";

function Parameter({ text, value }) {
  return (
    <div className={styles.parameter}>
      <span>{text}</span>
      <span>{value}</span>
    </div>
  );
}

export default Parameter;
