import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <input type="text" name="" className={styles.display} value={calVal} readOnly/>
  );
};

export default Display;
