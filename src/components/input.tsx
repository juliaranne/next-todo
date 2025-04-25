import styles from "./input.module.css";

export default function Input() {
  return (
    <label>
      Create a new goal <input className={styles.input} type="text" />
    </label>
  );
}
