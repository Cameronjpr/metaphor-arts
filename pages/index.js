import Head from 'next/head'
import Gallery from '../components/Gallery/Gallery'
import Navigation from '../components/Navigation/Navigation'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import styles from '../styles/Home.module.sass'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_CONTACT_EMAIL)
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
        {process.env.NEXT_PUBLIC_CONTACT_EMAIL && (
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Feedback from Metaphor Arts website`}
          >
            Contact
          </a>
        )}
      </footer>
    </div>
  )
}
