import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.liltext}>This is the landing page</p>
        <div className={styles.buttons}>
          <Link href="/login">
            <button className={styles.button}>log in</button>
          </Link>
          <Link href="/register">
            <button className={styles.button}>register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}