import styles from "./Button.module.css";

function Input({ btnText, onBtnClick, isDisabled, btnStyle }) {
  return (
    <button
      onClick={onBtnClick}
      disabled={isDisabled}
      className={btnStyle ? btnStyle : styles.btn}
    >
      {btnText}
    </button>
  );
}

export default Input;
