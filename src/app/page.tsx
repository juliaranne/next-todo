// import Image from "next/image";
import Link from "next/link";
import Input from "../components/input";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/about">About</Link>
      <main className={styles.main}>
        <Input></Input>
      </main>
    </div>
  );
}
