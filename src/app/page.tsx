// import Image from "next/image";
import Input from "../components/input";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Input></Input>
      </main>
    </div>
  );
}
