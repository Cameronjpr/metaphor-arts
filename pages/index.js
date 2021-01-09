import Head from 'next/head'
import Gallery from '../components/Gallery/Gallery'
import Navigation from '../components/Navigation/Navigation'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div className="App">
      <header>
        <h1>Peter Robson</h1>
        <Navigation />
      </header>
      <main>
        <Gallery />
        <About />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  )
}
