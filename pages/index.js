import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar.js'
import HomeScreen from '../components/HomeScreen.js'
import AboutScreen from '../components/AboutScreen.js'
import ProjectsSection from '../components/ProjectsSection.js'
import ContactScreen from '../components/ContactScreen.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brendan Cariota</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Skranji:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <main className={styles.main}>
        <HomeScreen />
        <AboutScreen />
        <ProjectsSection />
        <ContactScreen />
      </main>

      <footer className={styles.footer}>
        <div>
          <h2>Footer</h2>
        </div>
      </footer>
    </div>
  )
}
