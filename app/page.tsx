import Link from 'next/link';
import style from './styles.module.css';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className={style.main}>
      <div>
        <h1>Main page</h1>
      </div>
      <p>
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}
