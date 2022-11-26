import Head from 'next/head'
import Login from '../components/Login/Login'
import styles from '../styles/Home.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio sesion Restaurante</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Login />
      </main>
    </div>
  )
}
