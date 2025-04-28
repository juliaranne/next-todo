// import Image from "next/image";
import Link from "next/link";
import Edit from "../components/edit";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/">Home</Link>
      <Link href="/edit">Edit</Link>

      <main className={styles.main}>
        <Edit></Edit>
      </main>
    </div>
  );
}
