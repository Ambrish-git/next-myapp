import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link className={styles.card} href="/about">
            About
          </Link>
          <Link className={styles.card} href="/learn/next">
            Learn Nextjs
          </Link>
          <Link className={styles.card} href="/learn/angular">
            Learn angular
          </Link>
          <Link className={styles.card} href="/learn/vue">
            Learn vue
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
